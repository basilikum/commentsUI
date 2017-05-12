
export class VoteData {
    public id: string;
    public total: number;
    public plus: number;
    public minus: number;
    public own: number;

    constructor(data: any) {
        this.id = data.id;
        this.plus = data.plus;
        this.minus = data.minus;
        this.total = data.total;
        this.total = this.plus - this.minus;
        this.own = data.own;
    }
}
