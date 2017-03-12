import { User } from './user.model';

export class Thread {
    public id: string;
    public title: string;
    public board: string;
    public creator: User;
    public created: Date;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.board = data.board;
        this.creator = new User(data.creator);
        this.created = new Date(data.created);
    }
}
