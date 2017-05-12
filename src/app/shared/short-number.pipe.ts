import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

    transform(value: number): string {
        if (value < 1000) {
            return value.toString();
        }
        let suffix = '';
        let divisor = 1;
        if (value < 1000000) {
            suffix = 'k';
            divisor = 1000;
        } else if (value < 1000000000) {
            suffix = 'M';
            divisor = 1000000;
        } else {
            suffix = 'G';
            divisor = 1000000000;
        }
        let decimals = (divisor * 100).toString().length - (value).toString().length;
        return (value / divisor).toFixed(decimals) + suffix;
    }
}
