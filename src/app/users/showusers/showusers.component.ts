import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { observable } from 'rxjs';
// import { first } from 'rxjs/operators';

import { UserModel } from '../../_models/usermodel'
@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
  users: UserModel[];
  isDeleting:boolean= false;
  userName:UserModel;
  constructor(private userservice: UserService ,private router:Router) { }

  ngOnInit(): void {
    this.loadUsersList();

  }

  loadUsersList() {
    this.userservice.getAllUsers().subscribe(userList => {
   
      this.users = userList;
    })
  }

deleteuser(userName:string)
{
  this.userservice.deleteUser(userName).subscribe(res=>{
    this.loadUsersList();
  });
}

  gotoUserDetails(url, userName:string){
    var myurl = `${url}/${userName}`;
    console.log(myurl);
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }




}
