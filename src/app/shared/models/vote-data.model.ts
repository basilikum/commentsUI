
export class VoteData {
    public plus: number;
    public minus: number;
    public own: number;

    constructor(data: any) {
        this.plus = data.plus;
        this.minus = data.minus;
        this.own = data.own;
    }
}
