
import{LederReportDetailModel}from '../_models/serviceresponseledgermodel';
import{AccountHeader}from '../_models/serviceresponseledgermodel';
import{AccountFooter }from '../_models/serviceresponseledgermodel';
export class lederReportDetailModel implements LederReportDetailModel  {
    debugger;
    accountHeader:AccountHeader;
    accountLedger: LederReportDetailModel[];
    accountFooter:AccountFooter 
    
    }
    

export class Account_Header implements AccountHeader {
         
        compCode: string;
        accYear: string;
        accountId: string;
        name: string;
        opening: number;
        curDr: any;
        curCr: any;
        closing: any;
        orderBy: string;
        voucherDetails: any[];
        voucherMasters: any[];

        constructor( compCode: string,
            accYear: string,
            accountId: string,
            name: string,
            opening: number,
            curDr: any,
            curCr: any,
            closing: any,
           
           
            orderBy: string,
            voucherDetails: any[],
            voucherMasters: any[],
            ) 
            {
            this.compCode=compCode;
            this.accYear=accYear;
            this.accountId=accountId;
            this.name=name;
            this.opening=opening;
            this.curCr=curCr;
            this.curDr=curDr;
            this.closing=closing;
           
            this.voucherDetails=voucherDetails;
            this.voucherMasters=voucherMasters;
            this.orderBy=orderBy;
        }

    }
    
