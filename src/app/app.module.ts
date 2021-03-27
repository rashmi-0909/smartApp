import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import{AuthModule}from './auth/auth.module';
import{HttpClientModule,HttpHeaders}from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { CgstComponent } from './cgst/cgst.component';
import { ShowcgstComponent } from './cgst/showcgst/showcgst.component';
import { AddeditcgstComponent } from './cgst/addeditcgst/addeditcgst.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import{SharedService}from 'src/app/shared.service';
import { map } from 'rxjs/operators';
import{IgstListComponent}from'src/app/igst/igst-list.component';
import { SgstComponent } from './sgst/sgst.component';
import { ShowsgstComponent } from './sgst/showsgst/showsgst.component';
import { AddsgstComponent } from './sgst/addsgst/addsgst.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { AddcompanyComponent } from './company/addcompany/addcompany.component';
import { ShowcompanyComponent } from './company/showcompany/showcompany.component';
import { AccountmasterComponent } from './accountmaster/accountmaster.component';
import { AddaccountComponent } from './accountmaster/addaccount/addaccount.component';

import { TypemasterComponent } from './typemaster/typemaster.component';
import { AddtypemasterComponent } from './typemaster/addtypemaster/addtypemaster.component';
import { ShowtypemasterComponent } from './typemaster/showtypemaster/showtypemaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BankvoucherComponent } from './bankvoucher/bankvoucher.component';
import { UsersComponent } from './users/users.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CgstComponent,
    ShowcgstComponent,
    AddeditcgstComponent,
    DashboardComponent,
    IgstListComponent,
    SgstComponent,
    ShowsgstComponent,
    AddsgstComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    CompanyComponent,
    AddcompanyComponent,
    ShowcompanyComponent,
    AccountmasterComponent,
    AddaccountComponent,
   
    TypemasterComponent,
    AddtypemasterComponent,
    ShowtypemasterComponent,
    
    BankvoucherComponent,
    
    UsersComponent,
    ShowusersComponent,
    RegisterUserComponent,
    MenuComponent,
    NavComponent,
    AddigstComponent,
    TransactionmasterComponent,
    AddtransactionComponent,
    BillmasterComponent,
    AddbillmasterComponent,
   
   
    
 
  ],
  imports: [ RouterModule,
    BrowserModule,
    AppRoutingModule,
   
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
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }