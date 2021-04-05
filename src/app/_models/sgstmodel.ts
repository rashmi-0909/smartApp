export class SgstModel {
    sgstId: number;
    sgstDetail: string;
    sgstRate: number;

    constructor(
        sgstId: number,
        sgstDetail: string,
        sgstRate: number
    ) {
        this.sgstId = sgstId;
        this.sgstDetail = sgstDetail;
        this.sgstRate = sgstRate;
    }
}