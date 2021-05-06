import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SgstModel } from '../_models/sgstmodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { SgstParams } from '../_models/sgstparams';


@Injectable({
  providedIn: 'root'
})
export class SgstService {
  cgstModels: SgstModel[] = [];
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  
  getAllSgst(sgstParams: SgstParams)  {
   
    let params = this.getPaginationHeaders(sgstParams.pageNumber, sgstParams.pageSize);
    params = params.append('orderBy', sgstParams.orderBy);
    return this.getPaginatedResult<SgstModel[]>(this.baseUrl+'/SgstMaster/GetAllByPage', params);

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
    const body = {  orderBy: "sgstId" }
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
  getById(sgstId: string):Observable<SgstModel> {
    console.log('inside srvice');
    const body = { "sgstId":sgstId }
    debugger;
    return this.http.post(this.baseUrl+'/SgstMaster/GetSgstByCode',body).pipe(
      map((response: ServiceResponseModel) => {
     
        return JSON.parse(JSON.stringify(response.data));
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }
 addSgst(sgstData:SgstModel){
       console.log('in service');
    return this.http.post(this.baseUrl+'/SgstMaster/Add',sgstData);
   
  }

  editSgst(sgstData:SgstModel){
       return this.http.put<any>(this.baseUrl+'/SgstMaster/Edit',sgstData);
    }

  deleteSgst(sgstId:number){
    return this.http.delete<SgstModel>(this.baseUrl+'/SgstMaster/'+sgstId);
  }














}
