import{AccountHeadSummary}from '../_models/serviceresponsemodelsale';
import{SgstName,TrxType,CgstName}from '../_models/serviceresponsemodelsale';
export class salepurchaseReportDetailModel implements AccountHeadSummary  {
    compCode:    null | string;
    accYear:     null | string;
    vouNo:       null | string;
    vouDate:     Date;
    trxType:     TrxType | null;
    bilChq:      null | string;
    billId:      null;
    accountId:   null | string;
    accountName: null | string;
    drCr:        null | string;
    vouDetail:   null;
    vouAmount:   number;
    netAmount:   number;
    sgstId:      number | null;
    sgstName:    SgstName | null;
    sgstAmount:  number;
    cgstId:      number | null;
    cgstName:    CgstName | null;
    cgstAmount:  number;
    igstId:      null;
    igstName:    null;
    igstAmount:  number | null;
    constructor(
        compCode:    null | string,
        accYear:     null | string,
        vouNo:       null | string,
        vouDate:     Date,
        trxType:     TrxType | null,
        bilChq:      null | string,
        billId:      null,
        accountId:   null | string,
        accountName: null | string,
        drCr:        null | string,
        vouDetail:   null,
        vouAmount:   number,
        netAmount:   number,
        sgstId:      number | null,
        sgstName:    SgstName | null,
        sgstAmount:  number,
        cgstId:      number | null,
        cgstName:    CgstName | null,
        cgstAmount:  number,
        igstId:      null,
        igstName:    null,
        igstAmount:  number | null

    ){
       this.compCode =compCode;   
        this.accYear=accYear;
        this.vouNo=vouNo;
        this.vouDate=vouDate;
        this.trxType=trxType;
        this.bilChq=bilChq;
        this.billId=billId;
        this.accountId=accountId;
        this.accountName=accountName; 
        this.drCr=drCr;        
        this.vouDetail=vouDetail;   
        this.vouAmount=vouAmount  ;
        this.netAmount=netAmount  ;
        this.sgstId=sgstId;   
        this.sgstName=sgstName ; 
        this.sgstAmount=sgstAmount ;
        this.cgstId=cgstId;
        this.cgstName=cgstName
        this.cgstAmount=cgstAmount ;
        this.igstId=igstId;     
        this. igstName=igstName;    
        this.igstAmount=igstAmount; 

    }
    
    }
    

    
    
