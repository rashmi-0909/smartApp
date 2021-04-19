import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransactionMasterModel } from '../_models/transactionmaster';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { TransactionmasterParams } from '../_models/transactionmasterparams';

@Injectable({
  providedIn: 'root'
})
export class TransactionmasterService {

  baseUrl = environment.apiURL;
  transactionmasterModels: TransactionMasterModel[] = [];

  constructor(private http: HttpClient) { }

  getAllTransactionMaster(transactionmasterParams: TransactionmasterParams)  {
   
    let params = this.getPaginationHeaders(transactionmasterParams.pageNumber, transactionmasterParams.pageSize);
    params = params.append('orderBy', transactionmasterParams.orderBy);
    return this.getPaginatedResult<TransactionMasterModel[]>(this.baseUrl+'/TransactionMaster/GetAllByPage', params);

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

  TransactionGetAll(): Observable<TransactionMasterModel[]> {
   

    return this.http.get(this.baseUrl+'/TransactionMaster/GetAll').pipe(
      map((response: ServiceResponseModel) => {
       
        return JSON.parse(JSON.stringify(response.data));
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }

  getById(trxId: string):Observable<TransactionMasterModel> {
    debugger;
   console.log('inside srvice');
    
    return this.http.get(this.baseUrl+'/TransactionMaster/'+trxId).pipe(
  
    map((response: ServiceResponseModel) => {
     
      return JSON.parse(JSON.stringify(response.data));
      console.log(response.data);
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );

  }


  addTransaction(transactionData:TransactionMasterModel){
       console.log('in service');
       console.log(transactionData);
    return this.http.post(this.baseUrl+'/TransactionMaster/Add',transactionData);
   
  }

  editTransaction(transactionData:TransactionMasterModel){
       return this.http.put<any>(this.baseUrl+'/TransactionMaster/Edit',transactionData);
    }

   deleteTransaction(trxId:string){
    return this.http.delete<TransactionMasterModel>(this.baseUrl+'/TransactionMaster/'+trxId);

   } 



}
