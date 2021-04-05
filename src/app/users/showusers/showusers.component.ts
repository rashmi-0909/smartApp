import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';

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
  constructor(private accountservice: AccountService ,private router:Router) { }

  ngOnInit(): void {
    this.loadUsersList();

  }

  loadUsersList() {
    this.accountservice.getAllUsers().subscribe(userList => {
   
      this.users = userList;
    })
  }
//   deleteuser(userName:string) {
//       debugger;
//     const user = this.users.find(x => x.userName ===userName);
//    debugger;
//     if (!user) return;
//     this.isDeleting = true;
//     //  debugger;
//      this.accountservice.deleteUser(userName);
//       // .pipe(first())
//         // .subscribe(() => this.users = this.users.filter(x => x.userName !== userName));
//         this.router.navigateByUrl('menu');
//          debugger;
// }
deleteuser(userName:string)
{
  this.accountservice.deleteUser(userName).subscribe(res=>{
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
