export class CompanyModel {
    compCode: string;
    accYear: string;
    Name: string;
    yearBegin: Date;
    yearEnd: Date;
    taxId: string;
    autoVoucher:string;
    billMatch:string;
    Address: string;

    constructor(
        compCode: string,
        accYear: string,
        Name: string,
        yearBegin:Date,
        yearEnd: Date,
        taxId: string,
        autoVoucher: string,
        billMatch: string,
        Address: string,
    ) 
    {
        this.compCode = compCode;
        this.accYear = accYear;
        this.Name = Name;
        this.yearBegin = yearBegin;
        this.yearEnd = yearEnd;
        this.taxId = taxId;
        this.autoVoucher = autoVoucher;
        this.billMatch = billMatch;
        this.Address = Address;
    }
}
