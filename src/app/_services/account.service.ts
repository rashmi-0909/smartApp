import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_models/usermodel';
import { ServiceResponseModel } from '../_models/serviceresponsemodel';
 import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
    return this.http.post(this.baseUrl + '/User/Login', model).pipe(
      map((response: ServiceResponseModel) => {
        let jsonObj: any = JSON.stringify(response.data);
        let user: UserModel = <UserModel>jsonObj;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currnentUserSource.next(user);
        }
      })
    );
  }
 
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
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')


  let body = {
    userName: userName,
   
};

this.http.request('delete', this.baseUrl+'/User/Delete', {headers:headers,body:body});

// this.http.request('http://testAPI:3000/stuff', options)
  // const headers = new HttpHeaders()
  // .set('Content-Type', 'application/json')
  // const body = { userName: userName};
  // return this.http.delete<UserModel>(this.baseUrl+'/User/Delete',body,{ headers });
   //try1
// const httpParams=new HttpParams({
//   fromObject:{
//     userName:userName
//   }
// });
  
//    const headers = new HttpHeaders()
//    .set('userName', userName);
// //    console.log('in delete service');
// return this.http.delete<UserModel>(this.baseUrl+'/User/Delete',{params:httpParams});
//try1end

//try2end
// const header: HttpHeaders = new HttpHeaders()
//                 .append('Content-Type', 'application/json; charset=UTF-8');
                
                
//                 // .append('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken')
               
//             const httpOptions = {
//                 headers: header,
//                 data: { userName: userName }
//             };
//             return this.http.delete(this.baseUrl+'/User/Delete', httpOptions);
           
//try2end

}
/*
let headers = new Headers();
headers.append('Content-Type','application/json');
//post data missing(here you pass email and password)
data= {
"email":email,
"password":password
}
return this.http.post('http://localhost:8000/api/v1/authenticate',data,{ headers: headers})
.subscribe(
res =>{
console.log(res);
},
err => {
console.log(err.message);
}
)


*/


setCurrentUser(user:UserModel) {
  this.currnentUserSource.next(user);
}

logout() {
  localStorage.removeItem('user');
  this.currnentUserSource.next(null);
}




 
   }





 
  

 

