export class PartialList<T> {
    public count: number;
    public pageSize: number;
    public page: number;
    public results: T[];

    constructor(TCreator: { new (data: any): T; }, data: any) {
        this.count = data.count;
        this.pageSize = data.page_size;
        this.page = data.page;
        this.results = data.results.map((d: any) => {
            return new TCreator(d);
        });
    }
}
