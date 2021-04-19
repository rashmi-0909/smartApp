import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{UserService}from 'src/app/_services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  public actions = ['Action - 1', 'Action - 2', 'Action - 3']
  public dropdownItem: string;
  constructor(private userService:UserService,private router:Router ) {  this.dropdownItem = this.actions[0] }

  ngOnInit(): void {
  

  }

  changeValue(item) {
    this.dropdownItem = item;
  }
  logout() {
    this.userService.logout();
    this.router.navigateByUrl('');
    //this.loggedIn = false;
  }

}
