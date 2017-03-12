import { Site } from './site.model';

export class Board {
    public id: string;
    public path: string;
    public title: string;
    public site: Site;

    constructor(data: any) {
        this.id = data.id;
        this.path = data.path;
        this.title = data.title;
        this.site = new Site(data.site);
    }
}
