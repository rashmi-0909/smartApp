import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_models/usermodel';
import { ServiceResponseModel } from '../_models/serviceresponsemodel';
 import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  decodedToken:string;
  baseUrl = environment.apiURL;
  
  private currnentUserSource = new ReplaySubject<UserModel>(1);
  currnentUser$ = this.currnentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<UserModel[]> {
     
    return this.http.get(this.baseUrl+'/User/GetAll').pipe(
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
  
  getByName(userName: string):Observable<UserModel> {
     debugger;
    const httpParams=new HttpParams({
      fromObject:{
        userName:userName
      }
    });
   return this.http.get(this.baseUrl+'/User/ByName',{ params:httpParams }).pipe(
     map((response: ServiceResponseModel) => 
    {
      return JSON.parse(JSON.stringify(response.data));
    },
    error => 
    {
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





 
  

 

