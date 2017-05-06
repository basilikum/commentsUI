import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {

    transform(value: Date): string {
        const d = new Date();
        const diff = d.valueOf() - value.valueOf();
        if (diff < 60000) {
            return this.singularOrPlural(
                Math.round(diff / 1000),
                'second',
                'seconds'
            ) + ' ago';
        }
        if (diff < 60000 * 60) {
            return this.singularOrPlural(
                Math.round(diff / 1000 / 60),
                'minute',
                'minutes'
            ) + ' ago';
        }
        if (diff < 60000 * 60 * 24) {
            return this.singularOrPlural(
                Math.round(diff / 1000 / 60 / 60),
                'hour',
                'hours'
            ) + ' ago';
        }
        if (diff < 60000 * 60 * 24 * 7) {
            return this.singularOrPlural(
                Math.round(diff / 1000 / 60 / 60 / 24),
                'day',
                'days'
            ) + ' ago';
        }
        if (diff < 60000 * 60 * 24 * 365) {
            return this.singularOrPlural(
                Math.round(diff / 1000 / 60 / 60 / 24 / 7),
                'week',
                'weeks'
            ) + ' ago';
        }
        return this.singularOrPlural(
            Math.round(diff / 1000 / 60 / 60 / 24 / 365),
            'year',
            'years'
        ) + ' ago';
    }

    private singularOrPlural(num, singular, plural) {
        if (num === 1) {
            return num + ' ' + singular;
        }
        return num + ' ' + plural;
    }
}
