export class AccountmasterParams {
    compCode:string;
    accYear:string;
    pageNumber = 1;
    pageSize = 10;
    orderBy = 'accountId';
    constructor(
        compCode:string,
        accYear: string
       
    ) 
    {
        this.compCode =compCode;
        this.accYear=accYear;
    }
        
    
}









