import { environment } from '../../../environments/environment';

export class User {
    public id: string;
    public name: string;
    public created: Date;
    public hasAvatar: boolean;
    public imgUrl: string;

    constructor(data: any) {
        this.id = data.uid;
        this.name = data.name;
        this.created = data.created ? new Date(data.created) : null;
        this.hasAvatar = data.has_avatar || false;
        this.imgUrl = environment.apiBaseUrl + '/users/' + data.uid + '/avatar';
    }
}
