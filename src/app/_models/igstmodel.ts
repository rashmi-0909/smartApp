export class IgstModel {
    igstId: number;
    igstDetail: string;
    igstRate: number;

    constructor(
        igstId: number,
        igstDetail: string,
        igstRate: number
    ) {
        this.igstId = igstId;
        this.igstDetail = igstDetail;
        this.igstRate = igstRate;
    }
}