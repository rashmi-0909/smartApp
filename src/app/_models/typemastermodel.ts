export class TypeMasterModel {
    compCode: string;
    accYear: string;
    trxCd: string;
    trxDetail: string;
    prefix:string;
   itemSr: string;
   
   

    constructor(
        compCode: string,
        accYear: string,
        trxCd: string,
        trxDetail: string,
        prefix: string,
       itemSr: string,
        
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
        this.trxCd = trxCd;
        this.trxDetail = trxDetail;
        this.prefix=prefix;
        this.itemSr = itemSr;
       
    }
}
