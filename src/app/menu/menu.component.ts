import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{AccountService}from 'src/app/_services/account.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  public actions = ['Action - 1', 'Action - 2', 'Action - 3']
  public dropdownItem: string;
  constructor(private accountService:AccountService,private router:Router ) {  this.dropdownItem = this.actions[0] }

  ngOnInit(): void {
  

  }

  changeValue(item) {
    this.dropdownItem = item;
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('');
    //this.loggedIn = false;
  }

}
