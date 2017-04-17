
export class VoteData {
    public id: string;
    public total: number;
    public plus: number;
    public minus: number;
    public own: number;

    constructor(data: any) {
        this.id = data.id;
        this.total = data.total;
        this.plus = data.plus;
        this.minus = data.minus;
        this.own = data.own;
    }
}
