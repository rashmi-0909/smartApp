export class LedgerParamModel 
{
    compCode:string;
    accYear:string;
    pageNumber = 1;
    pageSize = 10;
    orderBy = 'vouNo';
    constructor(
        compCode:string,
        accYear: string
       
    ) 
    {
        this.compCode =compCode;
        this.accYear=accYear;
    }
}