import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//  import{Userlis}from './userlist/userlis.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
 readonly baseURL='http://localhost:9000/api/v1';

 

 getUserList():Observable<any[]> {
   return this.http.get<any>(this.baseURL+'/User/GetAll');
   
 }

  
 /*  refreshList():Observable<any[]> {
    return  this.http.get<any>(this.baseURL+'/User/GetAll')
      .toPromise()
      .then(res =>this.list = res as any[]);
     
    console.log(this.list);
      
  } */

}
