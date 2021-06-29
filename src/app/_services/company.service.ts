import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyModel } from '../_models/companymodel';
import { ServiceResponseModel } from '../_models/serviceresponseModel';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getAllCompany(): Observable<CompanyModel[]> {
   
    return this.http.get(this.baseUrl+'/Company/GetAll').pipe(
      map((response: ServiceResponseModel) => {
       
        return JSON.parse(JSON.stringify(response.data));
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }
  getById(compCode: string):Observable<CompanyModel> {
     return this.http.get(this.baseUrl+'/Company/'+compCode).pipe(
    map((response: ServiceResponseModel) => {
     
      return JSON.parse(JSON.stringify(response.data));
      console.log(response.data);
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );

  }
  addCompany(companyData:CompanyModel){
       console.log('in service');
       console.log(companyData);
    return this.http.post(this.baseUrl+'/Company/Add',companyData);
   
  }

  editCompany(companyData:CompanyModel){
       return this.http.put<any>(this.baseUrl+'/Company/Edit',companyData);
    }

  deleteCompany(compCode:string){
    return this.http.delete<CompanyModel>(this.baseUrl+'/Company/'+compCode);

  } 



}
