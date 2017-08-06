import { environment } from '../../../environments/environment';

export class User {
    public id: string;
    public name: string;
    public created: Date;
    public hasAvatar: boolean;
    public imgUrl: string;
    public email: string;
    public socialType: string;

    constructor(data: any) {
        this.id = data.uid;
        this.name = data.username;
        this.created = data.created ? new Date(data.created) : null;
        this.hasAvatar = data.has_avatar || false;
        this.imgUrl = environment.apiBaseUrl + '/users/' + data.uid + '/avatar';
        this.email = data.email || '';
        this.socialType = data.social_type || '';
    }
}
