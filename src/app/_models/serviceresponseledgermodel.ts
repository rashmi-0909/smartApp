export interface Company {
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
}

export interface AccountHeader {
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
}

export interface AccountFooter {
    compCode?: any;
    accYear?: any;
    accountId: string;
    name: string;
    opening: any;
    curDr: number;
    curCr: number;
    closing: number;
    orderBy: string;
    voucherDetails: any[];
    voucherMasters: any[];
}

export interface LederReportDetailModel {
    accountHeader: AccountHeader;
    accountLedger: any[];
    accountFooter: AccountFooter;
}

export interface Data {
    company: Company;
    lederReportDetailModel: LederReportDetailModel[];
}

export interface Serviceresponseledgermodel {
    data: Data;
    success: boolean;
    message?: any;
}


