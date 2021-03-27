import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SgstModel } from '../_models/sgstmodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { PaginatedResult } from '../_models/pagination ';
import { SgstParams } from '../_models/sgstparams';
const httpOptions = {
  hearders: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}


@Injectable({
  providedIn: 'root'
})
export class SgstService {
  cgstModels: SgstModel[] = [];
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  // getAllSgst(): Observable<SgstModel[]> {
   
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')

  //   return this.http.get(this.baseUrl+'/SgstMaster/GetAll', { 'headers': headers }).pipe(
  //     map((response: ServiceResponseModel) => {
       
  //       return JSON.parse(JSON.stringify(response.data));
  //     }, error => {
  //       console.log(error)
  //       return throwError('Unable to get the Value ')
  //     })
  //   );
  // }
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









  getById(sgstId: number):Observable<SgstModel> {
   console.log('inside srvice');
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

  return this.http.get(this.baseUrl+'/SgstMaster/'+sgstId,{ 'headers': headers }).pipe(
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

  // editCgst(val:number,cgstData:any){
  //   return this.http.put<any>(this.baseUrl+'/CgstMaster/Edit',val,cgstData);
  // }
  editSgst(sgstData:SgstModel){
       return this.http.put<any>(this.baseUrl+'/SgstMaster/Edit',sgstData);
    }

  deleteSgst(sgstId:number){
    return this.http.delete<SgstModel>(this.baseUrl+'/SgstMaster/'+sgstId);
  }














}
