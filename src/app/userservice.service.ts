import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx';  
import {Users}from'./showusers/users';




@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  Users: Observable<Users[]>;  
  neweuser:Observable<Users>;

  constructor(private http:HttpClient) { }
  readonly baseURL='http://localhost:9000/api/v1';
  getUser()  
  {  
   return this.http.get<Users[]>(this.baseURL + '/User/GetAll');  
  }  
 /*  AddUser(usr:Users)
  {
  
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
                      CompCode:usr.CompCode,UserName:usr.UserName,UserEmailId:usr.UserEmailId,UserPassword:usr.UserPassword
               }
  
  return this.http.post<Users>(this.baseURL+'/User/Add',usr,{headers});
  
  } */




}
