// GenralLedger Input Parameters 

export class SalePurchaseInput {
    compCode:string;
    accYear:string;
   
    startDate:Date;
    finishDate:Date;
    saleOrPurchaseType:string;
    constructor(
        compCode:string,
        accYear:string,
       
        startDate:Date,
        finishDate:Date,
        saleOrPurchaseType:string
       
    ) 
    {
        
    this.compCode=compCode;
    this.accYear=accYear;
    this.startDate=startDate;
    this.finishDate=finishDate;
    this.saleOrPurchaseType=saleOrPurchaseType;
   
}
}