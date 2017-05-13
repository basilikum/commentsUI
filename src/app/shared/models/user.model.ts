import { environment } from '../../../environments/environment';

export class User {
    public id: string;
    public name: string;
    public imgUrl: string;

    constructor(data: any) {
        this.id = data.uid;
        this.name = data.name;
        this.imgUrl = environment.apiBaseUrl + '/users/' + data.uid + '/avatar'
    }
}
