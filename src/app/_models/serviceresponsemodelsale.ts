export interface Serviceresponsesalepurchase {
    data:    Data;
    success: boolean;
    message: null;
}

export interface Data {
    company:                  Company;
    salePurchaseDetails:      AccountHeadSummary[];
    salePurchaseDetailsTotal: AccountHeadSummary[];
    accountHeadSummary:       AccountHeadSummary[];
    accountHeadSummaryTotal:  AccountHeadSummary[];
    cgstHeadSummary:          AccountHeadSummary[];
    cgstHeadSummaryTotal:     AccountHeadSummary[];
    sgstHeadSummary:          AccountHeadSummary[];
    sgstHeadSummaryTotal:     AccountHeadSummary[];
    igstHeadSummary:          AccountHeadSummary[];
    igstHeadSummaryTotal:     AccountHeadSummary[];
}

export interface AccountHeadSummary {
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
}

export enum CgstName {
    Cgst150Sales = "CGST-1.50%-SALES.",
    Cgst150SalesTest2 = "CGST-1.50%-SALES. - TEST 2",
}

export enum SgstName {
    SGST150SALESTESTTest2 = "SGST-1.50%-SALES. - TEST - test2",
    Sgst150Sales = "SGST-1.50%-SALES.",
}

export enum TrxType {
    S = "S",
}

export interface Company {
    compCode:       string;
    accYear:        string;
    name:           string;
    yearBegin:      Date;
    yearEnd:        Date;
    taxId:          string;
    autoVoucher:    string;
    billMatch:      string;
    address:        string;
    voucherMasters: any[];
}
