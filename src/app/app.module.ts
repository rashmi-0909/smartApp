import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import{HttpClientModule,HttpHeaders}from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';

import { ShowcgstComponent } from './cgst/showcgst/showcgst.component';
import { AddeditcgstComponent } from './cgst/showcgst/addeditcgst/addeditcgst.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { map } from 'rxjs/operators';
import{IgstListComponent}from'src/app/igst/igst-list.component';

import { ShowsgstComponent } from './sgst/showsgst/showsgst.component';
import { AddsgstComponent } from './sgst/addsgst/addsgst.component';


import { AddcompanyComponent } from './company/addcompany/addcompany.component';
import { ShowcompanyComponent } from './company/showcompany/showcompany.component';
import { AccountmasterComponent } from './accountmaster/accountmaster.component';
import { AddaccountComponent } from './accountmaster/addaccount/addaccount.component';


import { AddtypemasterComponent } from './typemaster/addtypemaster/addtypemaster.component';
import { ShowtypemasterComponent } from './typemaster/showtypemaster/showtypemaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { ShowusersComponent} from './users/showusers/showusers.component';
import{RegisterUserComponent}from'./users/register-user/register-user.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import{NavComponent}from'./nav/nav.component'

import { ToastrModule } from 'ngx-toastr';
import { AddigstComponent } from './igst/addigst/addigst.component';
import { TransactionmasterComponent } from './transactionmaster/transactionmaster.component';
import { AddtransactionComponent } from './transactionmaster/addtransaction/addtransaction.component';
import { BillmasterComponent } from './billmaster/billmaster.component';
import { AddbillmasterComponent } from './billmaster/addbillmaster/addbillmaster.component';

import { HttpInterceptorModule } from './security/http-interceptor.module';
import { GeneralledgerComponent } from './ledger/ledger.component';



@NgModule({
  declarations: [
    AppComponent,
       
    ShowcgstComponent,
    AddeditcgstComponent,
    DashboardComponent,
    IgstListComponent,
   
    ShowsgstComponent,
    AddsgstComponent,
    
   
    AddcompanyComponent,
    ShowcompanyComponent,
    AccountmasterComponent,
    AddaccountComponent,
    AddtypemasterComponent,
    ShowtypemasterComponent,
             
    ShowusersComponent,
    RegisterUserComponent,
    MenuComponent,
    NavComponent,
    AddigstComponent,
    TransactionmasterComponent,
    AddtransactionComponent,
    BillmasterComponent,
    AddbillmasterComponent,
    GeneralledgerComponent,
   
   
    
 
  ],
  imports: [ RouterModule,
    BrowserModule,
    AppRoutingModule,

   HttpInterceptorModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule ,
     BrowserAnimationsModule,
     ToastrModule.forRoot(),
     PaginationModule.forRoot(),
     BsDatepickerModule.forRoot(),
     BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }