export class User {
    public id: string;
    public name: string;
    public imgUrl: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.imgUrl = data.ext_picture_url;
    }
}
