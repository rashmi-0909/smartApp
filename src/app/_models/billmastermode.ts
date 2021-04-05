export class BillMasterModel {
    compCode: string;
    accYear: string;
    billId:string;
    accountId: string;
    billDate:Date;
    amount:number;
    adjusted:number;
    balance:number;
   

    constructor(
    compCode: string,
    accYear: string,
    billId:string,
    accountId: string,
    billDate:Date,
    amount:number,
    adjusted:number,
    balance:number,
   
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
        this.accountId = accountId;
        this.billId = billId;
        this.billDate =billDate;
        this.amount = amount;
        this.adjusted = adjusted;
        this.balance=balance;
    }
}
