import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
// import { Http, Headers, RequestOptions} from '@angular/common/http';




 const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private uriseg = 'http://localhost:9000/api/v1/User/Add';
   private decodedToken;
  constructor(private http: HttpClient) { }
    readonly baseURL='http://localhost:9000/api/v1';

  public register(userData: any): Observable<any> {
    //  const URI = this.baseURL +'/User/Add';
    return this.http.post(this.baseURL+'/User/Add', userData);

     

    
  }
  public login(userData: any): Observable<any> {
    // const URI = this.baseURL+ '/login';
    // var headers = new Headers();
    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    

    return this.http.post(this.baseURL+'/User/Login', userData).pipe(map(token => {
      return this.saveToken(token);
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }







}