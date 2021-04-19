import { Component,NgZone } from '@angular/core';
import{UserService}from './_services/user.service';
import{UserModel}from'./_models/usermodel';
import { Observable } from 'rxjs';
import{AppModule}from './app.module'
import { Router, RouterLink, NavigationStart,NavigationEnd } from '@angular/router';
// import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartApp';
  appurl:string;
  isLogin:boolean=false;
  currentUser$:Observable<UserModel>;
  constructor(public userService: UserService,private zone: NgZone,private router:Router) {
    
   }
  ngOnInit(): void {
    //this.getCurrentUser();
     
    this.currentUser$ = this.userService.currnentUser$;
  }
  setCurrentUser():void{
    const user:UserModel=JSON.parse(localStorage.getItem('user'));
    
  }
}
