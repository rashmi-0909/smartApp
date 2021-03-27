import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TypeMasterModel } from '../_models/typemastermodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { TypemasterParams } from '../_models/typemasterparams';


const httpOptions = {
  hearders: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class TypemasterService {

  baseUrl = environment.apiURL;
  typemasterModels: TypeMasterModel[] = [];

  constructor(private http: HttpClient) { }



  getAllTypeMaster(typemasterParams: TypemasterParams)  {
   
    let params = this.getPaginationHeaders(typemasterParams.pageNumber, typemasterParams.pageSize);
    params = params.append('orderBy', typemasterParams.orderBy);
    return this.getPaginatedResult<TypeMasterModel[]>(this.baseUrl+'/TypeMaster/GetAllByPage', params);

  }


  private getPaginationHeaders(pageNumber: number, pageSize: number) {
  
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }

  private getPaginatedResult<T>(url, params) {
    debugger;
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return this.http.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        debugger;
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }


  // getById(compCode: string):Observable<AccountMasterModel> {
  //  console.log('inside srvice');
  //   const headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')

  // return this.http.get(this.baseUrl+'/Company/'+compCode,{ 'headers': headers }).pipe(
  //   map((response: ServiceResponseModel) => {
     
  //     return JSON.parse(JSON.stringify(response.data));
  //     console.log(response.data);
  //   }, error => {
  //     console.log(error)
  //     return throwError('Unable to get the Value ')
  //   })
  // );

  // }


  addType(typeData:TypeMasterModel){
       console.log('in service');
       console.log(typeData);
    return this.http.post(this.baseUrl+'/TypeMaster/Add',typeData);
   
  }

  // editCgst(val:number,cgstData:any){
  //   return this.http.put<any>(this.baseUrl+'/Company/Edit',val,cgstData);
  // }
  editAccount(typeData:TypeMasterModel){
       return this.http.put<any>(this.baseUrl+'/TypeMaster/Edit',typeData);
    }

  // deleteAccount(compCode:string,accYear:string,){
  //   return this.http.delete<AccountMasterModel>(this.baseUrl+'/Company/'+compCode);

  // } 

}
