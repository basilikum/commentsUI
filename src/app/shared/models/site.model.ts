export class Site {
    public id: string;
    public netloc: string;

    constructor(data: any) {
        this.id = data.id;
        this.netloc = data.netloc;
    }
}
