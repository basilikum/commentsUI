import { User } from './user.model';
import { Site } from './site.model';
import { Thread } from './thread.model';
import { VoteData } from './vote-data.model';

export class Post {
    public id: string;
    public origin: string;
    public parent: string;
    public site: Site;
    public thread: string | Thread;
    public text: string;
    public creator: User;
    public created: Date;
    public modified: Date;
    public numberOfChildren: number;
    public voteData: VoteData;
    public children: Post[] = [];
    public showChildren = false;
    public showReplyForm = false;

    constructor(data: any) {
        this.id = data.id;
        this.origin = data.origin;
        this.parent = data.parent;
        this.site = data.site ? new Site(data.site) : null;
        this.thread = typeof data.thread === 'string' ? data.thread : data.thread ? new Thread(data.thread) : null;
        this.creator = new User(data.creator);
        this.created = new Date(data.created);
        this.modified = new Date(data.modified);
        this.text = data.text;
        this.numberOfChildren = data.number_of_children || 0;
        this.voteData = new VoteData(data.vote_entity);
    }
}
