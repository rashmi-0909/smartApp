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
    //debugger;
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return this.http.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        //debugger;
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }

  getById(igstId: number):Observable<IgstModel> {
   console.log('inside srvice');
    

  return this.http.get(this.baseUrl+'/IgstMaster/'+igstId).pipe(
    map((response: ServiceResponseModel) => {
     
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
