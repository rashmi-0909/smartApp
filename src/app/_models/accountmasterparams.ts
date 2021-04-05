export class AccountmasterParams {
    pageNumber = 1;
    pageSize = 10;
    orderBy = 'name';
    
    compCode='';
    accYear='';
	
    constructor(
        compCode: string,
        accYear: string,
        
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
       
    }
        
    
}









