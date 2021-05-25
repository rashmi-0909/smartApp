import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IgstModel } from '../_models/igstmodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';

import { PaginatedResult } from '../_models/pagination ';
import { IgstParams } from '../_models/igstparams';

import { Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class IgstService {
  igstModels: IgstModel[] = [];

  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getAllIgst(igstParams: IgstParams)  {
   
    let params = this.getPaginationHeaders(igstParams.pageNumber, igstParams.pageSize);
    params = params.append('orderBy', igstParams.orderBy);
    return this.getPaginatedResult<IgstModel[]>(this.baseUrl+'/IgstMaster/GetAllByPage', params);

  }

  private getPaginationHeaders(pageNumber: number, pageSize: number) {
    //debugger;
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }

  private getPaginatedResult<T>(url, params) {
    
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    const body = {  orderBy: "igstId" }
    return this.http.post<T>(url, body, { observe: 'response', params: params }).pipe(
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

  getById(igstId: string):Observable<IgstModel> {
    console.log('inside srvice');
    const body = { "igstId":igstId }
    debugger;
      return this.http.post(this.baseUrl+'/IgstMaster/GetIgstByCode',body).pipe(
      map((response: ServiceResponseModel) => {
        // debugger;



        return JSON.parse(JSON.stringify(response.data));
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }
  
  addIgst(igstData:IgstModel){
       console.log('in service');
    return this.http.post(this.baseUrl+'/IgstMaster/Add',igstData);
   
  }

   editIgst(igstData:IgstModel){
       return this.http.put<any>(this.baseUrl+'/IgstMaster/Edit',igstData);
    }

  deleteIgst(igstId:number){
    return this.http.delete<IgstModel>(this.baseUrl+'/IgstMaster/'+igstId);
  }



}
