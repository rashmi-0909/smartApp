import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountMasterModel } from '../_models/accountmaster';
import { Accountidmodel } from '../_models/accountid';

import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { AccountmasterParams } from '../_models/accountmasterparams';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { Serviceresponsemodel } from '../serviceresponsemodel';


@Injectable({
  providedIn: 'root'
})
export class AccountmasterService {

  baseUrl = environment.apiURL;
   constructor(private http: HttpClient) { }



  getAllAccountMaster(ob: AccountmasterParams)  {
   // debugger;
   let params = this.getPaginationHeaders(ob.pageNumber, ob.pageSize);
   params = params.append('orderBy', ob.orderBy);
    return this.getPaginatedResult<AccountMasterModel[]>(this.baseUrl+'/AccountMaster/GetAllByPage', params,ob);

  }


  private getPaginationHeaders(pageNumber: number, pageSize: number) {
   
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
   
    return params;
  }

  private getPaginatedResult<T>(url, params,ob1:AccountmasterParams) {
   
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    let accountbody = 
    { compCode:ob1.compCode,
      accYear:ob1.accYear,
      orderBy:"accountId",
    };
    return this.http.post<T>(url,accountbody,{ observe: 'response', params: params }).pipe(
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


  AccountGetAll(compCode:string,accYear:string): Observable<AccountMasterModel[]> {
   

    
    const accountbody = 
    { compCode:compCode,
      accYear:accYear
     
    };

    return this.http.post(this.baseUrl+'/AccountMaster/GetAll',accountbody).pipe(
      map((response:ServiceResponseModel ) => {
       
        return JSON.parse(JSON.stringify(response.data));
        
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }

  addAccount(accountData:AccountMasterModel){
       console.log('in service');
       console.log(accountData);
    return this.http.post(this.baseUrl+'/AccountMaster/Add',accountData);
   
  }

  
  editAccount(accountData:AccountMasterModel){
       return this.http.put<any>(this.baseUrl+'/AccountMaster/Edit',accountData);
    }

  // deleteAccount(compCode:string,accYear:string,){
  //   return this.http.delete<AccountMasterModel>(this.baseUrl+'/Company/'+compCode);

  // } 


}
