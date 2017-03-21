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

    constructor(data: any) {
        this.id = data.id;
        this.origin = data.origin ? new Post(data.origin) : null;
        this.parent = data.parent ? new Post(data.parent) : null;
        this.site = new Site(data.site);
        this.creator = new User(data.creator);
        this.created = new Date(data.created);
        this.text = data.text;
    }
}
