import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountMasterModel } from '../_models/accountmaster';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { AccountmasterParams } from '../_models/accountmasterparams';


@Injectable({
  providedIn: 'root'
})
export class AccountmasterService {

  baseUrl = environment.apiURL;
  accountmasterModels: AccountMasterModel[] = [];

  constructor(private http: HttpClient) { }



  getAllAccountMaster(accountmasterParams: AccountmasterParams)  {
   // debugger;
    let params = this.getPaginationHeaders(accountmasterParams.pageNumber, accountmasterParams.pageSize);
    params = params.append('orderBy', accountmasterParams.orderBy);
    return this.getPaginatedResult<AccountMasterModel[]>(this.baseUrl+'/AccountMaster/GetAllByPage', params);

  }


  private getPaginationHeaders(pageNumber: number, pageSize: number) {
   
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
   
    return params;
  }

  private getPaginatedResult<T>(url, params) {
   
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return this.http.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
       
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }


  AccountGetAll(): Observable<AccountMasterModel[]> {
   

    return this.http.get(this.baseUrl+'/AccountMaster/GetAll').pipe(
      map((response: ServiceResponseModel) => {
       
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
