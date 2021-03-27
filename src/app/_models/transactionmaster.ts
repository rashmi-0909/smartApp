export class TransactionMasterModel {
    
    trxId:string;
    drCr: string;
    trxDetail:string;
    accountId1:string;
    accountId2:string;
    accountId3:string;
   
   

    constructor(
        trxId:string,
        drCr: string,
        trxDetail: string,
        accountId1: string,
        accountId2: string,
        accountId3: string,
       
    ) 
    {
       this.trxId=trxId;
       this.drCr=drCr;
       this.trxDetail=trxDetail;
       this.accountId1=accountId1;
       this.accountId2=accountId2;
       this.accountId3=accountId3;
       
    }
}
