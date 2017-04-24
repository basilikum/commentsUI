import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'autoLinks'
})
export class AutoLinksPipe implements PipeTransform {

    private exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    transform(value: any, args?: any): any {
        return value.toString().replace(this.exp, '<a href="$1" target="_blank">$1</a>');
    }
}
