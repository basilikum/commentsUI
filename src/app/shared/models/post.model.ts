import { User } from './user.model';
import { Site } from './site.model';

export class Post {
    public id: string;
    public origin: Post;
    public parent: Post;
    public site: Site;
    public text: string;
    public creator: User;
    public created: Date;
    public numberOfChildren: number;
    public children: Post[] = [];
    public showChildren = false;
    public showReplyForm = false;

    constructor(data: any) {
        this.id = data.id;
        this.origin = data.origin;
        this.parent = data.parent;
        this.site = new Site(data.site);
        this.creator = new User(data.creator);
        this.created = new Date(data.created);
        this.text = data.text;
        this.numberOfChildren = data.number_of_children || 0;
    }
}
