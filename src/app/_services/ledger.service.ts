import { Injectable } from '@angular/core';
import { LedgerModel } from '../_models/ledgermodel';

import{LedgerParamModel}from 'src/app/_models/ledgerparam';
import{AccountInfoModel}from 'src/app/_models/accountinfo';
import{GenralLedgerModel}from 'src/app/_models/generalledger';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import{Serviceresponseledgermodel}from '../_models/serviceresponseledgermodel';
import{lederReportDetailModel}from '../_models/ledgermodeldetail';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResult } from '../_models/pagination ';
import{AccountMasterModel}from '../_models/accountmaster';
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { Serviceresponsemodel } from '../serviceresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
 ledgerdata:Array<Object>;
baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
    
getAllLedger(ob:LedgerParamModel): Observable<LedgerModel[]> 
  {  
      let ledgerbody = 
      { compCode:ob.compCode,
        accYear:ob.accYear,
        orderBy:ob.orderBy,
      };
      return this.http.post(this.baseUrl+'/Ledger/GetAll', ledgerbody ).pipe(
      map((response: ServiceResponseModel) =>
    {
      return JSON.parse(JSON.stringify(response.data));
     
    }, 
    error => 
    {
    console.log(error)
    }));
}


getAllLedgerByPage(ob:LedgerParamModel)  {
 
  let params = this.getPaginationHeaders(ob.pageNumber, ob.pageSize);
  params = params.append('orderBy', ob.orderBy);
  return this.getPaginatedResult<LedgerModel[]>(this.baseUrl+'/Ledger/GetAllByPage',params,ob);

}
private getPaginationHeaders(pageNumber: number, pageSize: number) {
  // debugger;
  let params = new HttpParams();
  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());
  return params;
}

private getPaginatedResult<T>(url, params,ob1:LedgerParamModel) {
  
  const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
  let ledgerbody = 
  { compCode:ob1.compCode,
    accYear:ob1.accYear,
    orderBy:"vouNo",
  };
  return this.http.post<T>(url, ledgerbody, { observe: 'response', params: params }).pipe(
    map(response => {
     
     let jsonBody: any = response.body;
      paginatedResult.result = jsonBody.data;
      if (response.headers.get('Pagination') !== null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

getById(ob:AccountInfoModel):Observable<AccountMasterModel> {
  console.log('inside srvice');
  let accountbody = 
  { compCode:ob.compCode,
    accYear:ob.accYear,
    accountId:ob.accountId,
  };
 
  return this.http.post(this.baseUrl+'/AccountMaster/ByCode',accountbody).pipe(
    map((response: ServiceResponseModel) => {
   
      return JSON.parse(JSON.stringify(response.data));
      
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );
}


GetGenralLedger(ob:GenralLedgerModel):Observable<lederReportDetailModel[]>
 {
 
  const accountbody = 
  { compCode:ob.compCode,
    accYear:ob.accYear,
    startDate:ob.startDate,
    finishDate:ob.finishDate,
    startAccount:ob.startAccount,
    finishAccount:ob.finishAccount

   
  };

  return this.http.post(this.baseUrl+'/Ledger/GeneralLedger',accountbody).pipe(
    map((response:Serviceresponseledgermodel ) => {
    
     this.ledgerdata=JSON.parse(JSON.stringify(response.data.lederReportDetailModel));
     
      
      return JSON.parse(JSON.stringify(response.data.lederReportDetailModel));
     
      
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );
}


// getGenralLedgerByPage(ob:GenralLedgerModel)  {
//  
//   let params = this.getPaginationHeaders(ob.pageNumber, ob.pageSize);
  
//   return this.getPaginatedResult<lederReportDetailModel[]>(this.baseUrl+'/Ledger/GetAllByPage',params,ob);

// }











GetGenralLedger_company(ob:GenralLedgerModel)
 {
 
  const accountbody = 
  { compCode:ob.compCode,
    accYear:ob.accYear,
    startDate:ob.startDate,
    finishDate:ob.finishDate,
    startAccount:ob.startAccount,
    finishAccount:ob.finishAccount

   
  };

  return this.http.post(this.baseUrl+'/Ledger/GeneralLedger',accountbody).pipe(
    map((response:Serviceresponseledgermodel ) => {
    
     this.ledgerdata=JSON.parse(JSON.stringify(response.data.company));
     
      
      return JSON.parse(JSON.stringify(response.data.company));
     
      
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );
}












}
