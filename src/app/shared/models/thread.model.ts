import { User } from './user.model';
import { Post } from './post.model';

export class Thread {
    public id: string;
    public title: string;
    public board: string;
    public creator: User;
    public created: Date;
    public post: Post;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.board = data.board;
        this.creator = new User(data.creator);
        this.created = new Date(data.created);
        this.post = data.post ? new Post(data.post) : null;
    }
}
