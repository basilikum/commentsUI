export class PartialList<T> {
    public count: number;
    public pageSize: number;
    public page: number;
    public numberOfPages: number;
    public pages: number[];
    public results: T[];

    constructor(TCreator: { new (data: any): T; }, data: any) {
        this.count = data.count;
        this.pageSize = data.page_size;
        this.page = data.page;
        this.numberOfPages = Math.max(1, Math.ceil(this.count / this.pageSize));
        this.pages = (new Array(this.numberOfPages)).fill(1).map((val, i) => i + 1);
        this.results = data.results.map((d: any) => {
            return new TCreator(d);
        });
    }
}
