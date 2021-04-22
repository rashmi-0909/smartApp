import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CgstModel } from '../_models/cgstmodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { PaginatedResult } from '../_models/pagination ';
import { CgstParams } from '../_models/cgstparams';
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CgstService {
  cgstModels: CgstModel[] = [];

  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getAllCgst(cgstParams: CgstParams)  {
    
    let params = this.getPaginationHeaders(cgstParams.pageNumber, cgstParams.pageSize);
    params = params.append('orderBy', cgstParams.orderBy);
    return this.getPaginatedResult<CgstModel[]>(this.baseUrl+'/CgstMaster/GetAllByPage',params);

  }
  private getPaginationHeaders(pageNumber: number, pageSize: number) {
    // debugger;
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }

  private getPaginatedResult<T>(url, params) {
    debugger;
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    const body = {  orderBy: "cgstId" }
    return this.http.post<T>(url, body, { observe: 'response', params: params }).pipe(
      map(response => {
        debugger;
        console.log(response.body);
        paginatedResult.result = response.body;
       
        
        
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }



  getById(cgstId: number):Observable<CgstModel> {
   console.log('inside srvice');
   

  return this.http.get(this.baseUrl+'/CgstMaster/'+cgstId).pipe(
    map((response: ServiceResponseModel) => {
     
      return JSON.parse(JSON.stringify(response.data));
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );

  }


  addCgst(cgstData:CgstModel){
       console.log('in service');
    return this.http.post(this.baseUrl+'/CgstMaster/Add',cgstData);
   
  }

    editCgst(cgstData:CgstModel){
       return this.http.put<any>(this.baseUrl+'/CgstMaster/Edit',cgstData);
    }

  deleteCgst(cgstId:number){
    return this.http.delete<CgstModel>(this.baseUrl+'/CgstMaster/'+cgstId);
  }



}
