export class AccountMasterModel {
    compCode: string;
    accYear: string;
    accountId: string;
    name: string;
    opening:number;
    curDr: number;
    curCr:number;
   

    constructor(
        compCode: string,
        accYear: string,
        accountId: string,
        name: string,
        opening: number,
        curDr: number,
        curCr:number,
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
        this.accountId = accountId;
        this.name = name;
        this.opening = opening;
        this.curCr = curCr;
        this.curDr = curDr;
    }
}
