export class LedgerModel {
    compCode:string;
    accYear:string;
    vouNo:string;
    vouDate:string;
    trxType:string;
    bilChq:string;
    itemSr:string;
    accountId:string;
    amount:string;
   corrAccountId:string;
    vouDetail:string;
        
    drAmount:number;
    crAmount: number;
    clAmount:number;
   
    corrAccountName: string;
   
   
    constructor(
        compCode:string,
        accYear:string,
        vouNo:string,
       vouDate:string,
        trxType:string,
        bilChq:string,
        itemSr:string,
        accountId:string,
        amount:string,
        corrAccountId:string,
         vouDetail:string,
         drAmount:number,
        crAmount: number,
        clAmount:number,
        corrAccountName: string
   
       
    ) 
    {
        this.compCode =compCode;
        this.accYear=accYear;
        this.vouNo=vouNo;
        this.vouDate=vouDate;
        this.trxType=trxType;
        this.bilChq=bilChq;
        this.itemSr=itemSr;
        this.accountId=accountId;
        this.amount=amount;
        this.corrAccountId=corrAccountId;
        this.vouDetail=vouDetail;
        this.drAmount=drAmount;
        this.crAmount=crAmount;
        this.clAmount=clAmount;
        this.corrAccountName=corrAccountName;
       


}
}