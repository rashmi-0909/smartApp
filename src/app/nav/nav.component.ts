import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserModel } from '../_models/usermodel';
import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public menuBar:boolean=false;
  model: any = {}
  //loggedIn: boolean;
  // currentUser$: Observable<UserModel>;
    public currentUser$:string;
 //public loggedInUser:any;

  constructor(public userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    // this.currentUser$ = this.userService.currnentUser$;
    this.currentUser$=localStorage.getItem('user');
    
  }

  login():void {
    console.log(this.model)
     this.userService.login(this.model).subscribe(Response=> {
      this.router.navigate(['showcompany'], { queryParams: { loggedin: 'success' } });
      
     },
      error => {
      console.log(error);
      this.toastr.error(error);
    })
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
    
  }
   enableMenu(){
     this.menuBar=true;
   }
    
 
}
