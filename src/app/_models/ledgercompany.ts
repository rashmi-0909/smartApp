
import{Company}from '../_models/serviceresponseledgermodel';

export class LedgerCompany implements Company  {
   
    compCode: string;
    accYear: string;
    name: string;
    yearBegin: Date;
    yearEnd: Date;
    taxId: string;
    autoVoucher: string;
    billMatch: string;
    address: string;
    voucherMasters: any[];
    constructor(compCode: string,
        accYear: string,
        name: string,yearBegin: Date,yearEnd: Date,taxId: string, autoVoucher: string,
        billMatch: string,
        address: string,
        voucherMasters: any[]){
            this.compCode=compCode;
            this.accYear=accYear;
            this.name=name;
            this.billMatch=billMatch;
            this.address=address;
            this.yearBegin=yearBegin;
            this.yearEnd=yearEnd;
            this.taxId=taxId;
            this.autoVoucher=autoVoucher;
            this.voucherMasters=voucherMasters;


    }
}
    
