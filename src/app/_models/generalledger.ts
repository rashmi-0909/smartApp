export class GenralLedgerModel {
    compCode:string;
    accYear:string;
   
    startDate:Date;
    finishDate:Date;
    startAccount:string;
    finishAccount:string;
    pageNumber = 1;
    pageSize = 10;
    constructor(
        compCode:string,
        accYear:string,
       
        startDate:Date,
        finishDate:Date,
        startAccount:string,
        finishAccount:string
       
    ) 
    {
        
    this.compCode=compCode;
    this.accYear=accYear;
   
    this.startDate=startDate;
    this.finishDate=finishDate;
   this.startAccount=startAccount
    this.finishAccount=finishAccount;
}
}