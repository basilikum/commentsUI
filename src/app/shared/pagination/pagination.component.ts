import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PartialList } from '../partial-list';

@Component({
    selector: 'cmm-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input() partialList: PartialList<any>;
    @Input() pageQueryParamName: string = 'page';

    pages: any[] = [];

    constructor() { }

    ngOnInit() {
        this.pages = this.getPages(this.partialList.page, this.partialList.numberOfPages, 10);
    }

    ngOnChanges() {
        this.pages = this.getPages(this.partialList.page, this.partialList.numberOfPages, 10);
    }

    getQueryParamObject(page: number) {
        return {
            [this.pageQueryParamName]: Math.abs(page)
        };
    }

    private getPages(page, numberOfPages, maxNumberOfButtons) {
        if (numberOfPages <= maxNumberOfButtons) {
            return (new Array(numberOfPages)).fill(1).map((val, i) => i + 1);
        }
        const sections = [
            [1],
            this.getArray(
                page <= maxNumberOfButtons / 2 ? 2 : Math.max(2, page - 2),
                page >= numberOfPages - maxNumberOfButtons / 2 ? numberOfPages - 1 : Math.min(numberOfPages - 1, page + 2)
            ),
            [numberOfPages]
        ].reduce(this.combineAdjacentSections, []);
        const numberOfGaps = sections.length - 1;
        const numberOfOccupiedSpots = sections
            .map(this.property('length'))
            .reduce(this.sum, 0);
        const numberOfRemainingSpots = maxNumberOfButtons - numberOfOccupiedSpots - numberOfGaps;
        const remainingSpotsPerGap = Math.floor(numberOfRemainingSpots / numberOfGaps);
        const gaps = [remainingSpotsPerGap];
        if (numberOfGaps === 2) {
            gaps.push(numberOfRemainingSpots - remainingSpotsPerGap);
        }
        let k = 0;
        const flattenSections = sections.reduce((acc, section) => {
            if (acc.length === 1) {
                acc.push(-section[0] + gaps[k] + 1);
                const arr = this.getArray(section[0] - gaps[k++], section[0] - 1);
                acc.push.apply(acc, arr);
            } else if (acc.length > 1) {
                const arr = this.getArray(acc[acc.length - 1] + 1, acc[acc.length - 1] + gaps[k++]);
                acc.push.apply(acc, arr);
                acc.push(-acc[acc.length - 1] - 1);
            }
            acc.push.apply(acc, section);
            return acc;
        }, []);
        return flattenSections;
    }

    private getArray(minValue, maxValue) {
        return (new Array(maxValue - minValue + 1))
            .fill(1)
            .map((val, i) => i + minValue);
    }

    private combineAdjacentSections(acc, section) {
        const lastSection = acc[acc.length - 1],
                lastPage = lastSection ? lastSection[lastSection.length - 1] : null;
        if (lastPage && section[0] === lastPage + 1) {
            lastSection.push.apply(lastSection, section);
        } else {
            acc.push(section);
        }
        return acc;
    }

    private sum(acc, value) {
        return acc + value;
    }

    private property(name) {
        return (obj) => {
            return obj[name];
        };
    }
}
