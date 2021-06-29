export class AccountInfoModel {
    compCode: string;
    accYear: string;
    accountId: string;
    
   

    constructor(
        compCode: string,
        accYear: string,
        accountId: string,
       
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
        this.accountId = accountId;
        
    }
}
