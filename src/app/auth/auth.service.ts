import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
// import { Http, Headers, RequestOptions} from '@angular/common/http';
import{Serviceresponsemodel}from'../serviceresponsemodel';

import { environment } from 'src/environments/environment';



 const jwt = new JwtHelperService();
 class DecodedToken {
  exp: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  


     CgstList:Serviceresponsemodel;
  // private uriseg = 'http://localhost:9000/api/v1/User/Add';
   private decodedToken;
  constructor(private http: HttpClient) { }
    //readonly baseURL='http://localhost:9000/api/v1';
     readonly  baseURL=environment.apiURL;
  public register(userData: any): Observable<any> {
    //  const URI = this.baseURL +'/User/Add';
    return this.http.post(this.baseURL+'/User/Add', userData);

     

    
  }
  public login(userData: any): Observable<any> {
      return this.http.post(this.baseURL+'/User/Login', userData).pipe(map(token => {
      return this.saveToken(token);
      
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
    console.log(this.decodedToken);
  }
  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

// //User Service
// getUserList():Observable<ServiceResponseModel[]>{
//   // console.log('service started');
//   return this.http.get<any>(this.baseURL+'/User/GetAll');
// }





      

///api/v1/CgstMaster/{cgstId}
  //    getCgst():Observable<Serviceresponsemodel[]>{
  //   console.log('service started');
  //   return this.http.get<any[]>(this.baseURL+'/CgstMaster/{cgstId}');
  // }

        //  getCgstList()
        //  {
        //   this.http.get<Serviceresponsemodel>('http://localhost:9000/api/v1/CgstMaster/GetAll').subscribe(response => {
        //     ///this.cgst = response.data;
        //     this.CgstList.data= response.data;
        //   }, error => {
        //     console.log(error);
        //   })


        //  }
      addCgst(userData: any): Observable<any>{
        return this.http.post(this.baseURL+'/CgstMaster/Add',userData);
      }


      //get cgst by cgstId
    




     
     
      

 //sgst service

 getSgstList():Observable<any[]>{
  console.log('service started');
  return this.http.get<any>(this.baseURL+'/SgstMaster/GetAll');
}

  addSgst(userData: any): Observable<any>{
   return this.http.post(this.baseURL+'/SgstMaster/Add',userData);
 }
 



//Comany Service
addCompany(userData: any): Observable<any>{
  return this.http.post(this.baseURL+'/Company/Add',userData);
}

//Account Service
addAccount(userData: any): Observable<any>{
  return this.http.post(this.baseURL+'/AccountMaster/Add',userData);
}



//TypeMaster Service
addTypemaster(userData: any): Observable<any>{
  return this.http.post(this.baseURL+'/TypeMaster/Add',userData);
}

}