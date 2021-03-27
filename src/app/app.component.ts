import { Component,NgZone } from '@angular/core';
import{AccountService}from './_services/account.service';
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
  constructor(public accountService: AccountService,private zone: NgZone,private router:Router) {
    // this.router.events.subscribe((event: any) => {
    // //   if (event instanceof NavigationEnd) {
    // //     if (event.url === '/nav') {
    // //       this.isLogin= true;
    // //     } else {
    // //       this.isLogin= false;
    // //     }
    // //   }
    // // });
   }
  ngOnInit(): void {
    //this.getCurrentUser();
     
    this.currentUser$ = this.accountService.currnentUser$;
  }
  setCurrentUser():void{
    const user:UserModel=JSON.parse(localStorage.getItem('user'));
    
  }
}
