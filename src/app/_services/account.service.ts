import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_models/usermodel';
import { ServiceResponseModel } from '../_models/serviceresponsemodel';
 import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt';
// const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  decodedToken:string;
  baseUrl = environment.apiURL;
  
  private currnentUserSource = new ReplaySubject<UserModel>(1);
  currnentUser$ = this.currnentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<UserModel[]> {
          console.log('in get all users');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
     
    return this.http.get(this.baseUrl+'/User/GetAll',{ 'headers': headers }).pipe(
      map((response: ServiceResponseModel) => {
       
        return JSON.parse(JSON.stringify(response.data));
      }, error => {
        console.log(error)
        return throwError('Unable to get the Value ')
      })
    );
  }
  login(model: any) {
    // debugger;
    return this.http.post(this.baseUrl + '/User/Login', model).pipe(
      map((response: ServiceResponseModel) => {
        debugger;
        let jsonObj: any = JSON.stringify(response.data);
        
        let user: UserModel = <UserModel>jsonObj;
        //  return user.token;
        if (user) {
          localStorage.setItem('user', JSON.stringify(response.data));
          this.currnentUserSource.next(user);
        }
      })
    );
  }
  

  // public login(userData: any): Observable<any> {
  //   // const URI = this.baseURL+ '/login';
  //   // var headers = new Headers();
  //   // let headers = new HttpHeaders();
  //   // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   const  headers = new  HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
     
  //   headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
  //   headers.append('Content-Type', 'application/json');
  //   // let options = new RequestOptions({ headers: headers });
    

  //   return this.http.post(this.baseUrl+'/User/Login', userData).pipe(map(token => {
  //     return this.saveToken(token);
  //   }));
  // }

  // // private saveToken(token: any): any {
  // //   this.decodedToken = jwt.decodeToken(token);
  // //   localStorage.setItem('auth_tkn', token);
  // //   localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
  // //   return token;
  // // }

  getByName(userName: string):Observable<UserModel> {
    // console.log('inside srvice');
    //  const headers = new HttpHeaders()
    //  .set('Content-Type', 'application/json',
    //  )
    const httpParams=new HttpParams({
      fromObject:{
        userName:userName
      }
    });
   return this.http.get(this.baseUrl+'/User/ByName',{ params:httpParams }).pipe(
     map((response: ServiceResponseModel) => {
      
       return JSON.parse(JSON.stringify(response.data));
     }, error => {
       console.log(error)
       return throwError('Unable to get the Value ')
     })
   );


}

register(userData:UserModel) {
  return this.http.post(this.baseUrl+'/User/Add',userData).pipe(
    map((response: ServiceResponseModel) => {
      let jsonObj: any = JSON.stringify(response.data);
      let user: UserModel = <UserModel>jsonObj;

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currnentUserSource.next(user);
      }
      return user;
    })
  )
}
editUser(userData:UserModel){
  return this.http.put<UserModel>(this.baseUrl+'/User/Edit',userData);
}


deleteUser(userName:string){
return this.http.delete(this.baseUrl+'/User/Delete?userName=' + userName);
};

setCurrentUser(user:UserModel) {
  this.currnentUserSource.next(user);
}

logout() {
  localStorage.removeItem('user');
  this.currnentUserSource.next(null);
}




 
   }





 
  

 

