import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShowcgstComponent}from'./cgst/showcgst/showcgst.component';
import{DashboardComponent}from'./dashboard/dashboard.component';
import{IgstListComponent}from 'src/app/igst/igst-list.component';
import{ AddeditcgstComponent }from './cgst/showcgst/addeditcgst/addeditcgst.component';

import{ShowsgstComponent}from './sgst/showsgst/showsgst.component';
import{AddsgstComponent}from './sgst/addsgst/addsgst.component';
import{AddigstComponent}from './igst/addigst/addigst.component';
import{AddcompanyComponent}from'./company/addcompany/addcompany.component';
import{ShowcompanyComponent}from'./company/showcompany/showcompany.component'
import{AccountmasterComponent}from'./accountmaster/accountmaster.component';
import{AddaccountComponent}from'./accountmaster/addaccount/addaccount.component';

import{AddtypemasterComponent}from'./typemaster/addtypemaster/addtypemaster.component';
import{ShowtypemasterComponent}from './typemaster/showtypemaster/showtypemaster.component';
import{TransactionmasterComponent}from './transactionmaster/transactionmaster.component';
import{AddtransactionComponent}from'./transactionmaster/addtransaction/addtransaction.component';


import{ShowusersComponent}from './users/showusers/showusers.component';
import{RegisterUserComponent}from './users/register-user/register-user.component';
import{MenuComponent}from './menu/menu.component';
import{NavComponent}from'./nav/nav.component';

const routes: Routes = [
  
  {path:'menu',component:MenuComponent},
  
  {path:'showigst',component:IgstListComponent},
  { path:'showigst/edit', component: AddigstComponent},
  {path:'addigst',component:AddigstComponent},
  {path:'showcgst',component:ShowcgstComponent},
  {path:'addcgst',component:AddeditcgstComponent},
  // { path: 'showcgst/edit/:cgstId', component: AddeditcgstComponent},
  { path: 'showcgst/edit', component: AddeditcgstComponent},
  {path:'dashboard',component:DashboardComponent},
     {path:'showsgst',component:ShowsgstComponent},
  {path:'addsgst',component:AddsgstComponent},
  { path:'showsgst/edit', component: AddsgstComponent},
  {path:'addcompany',component:AddcompanyComponent},
  { path:'showcompany/edit/:compCode', component: AddcompanyComponent},
  {path:'showcompany',component:ShowcompanyComponent},
  {path:'addaccount',component:AddaccountComponent},
  {path:'accountmaster',component:AccountmasterComponent},
  {path:'addtypemaster',component:AddtypemasterComponent},
  {path:'showtypemaster',component:ShowtypemasterComponent},
  {path:'transactionmaster',component:TransactionmasterComponent},
  {path:'addtransactionmaster',component:AddtransactionComponent},

  { path:'transactionmaster/edit/:trxId', component: AddtransactionComponent},

    
    
    {path:'adduser',component:RegisterUserComponent}, 
    { path:'showusers/edit/:userName',component:RegisterUserComponent },
    {path:'showusers',component:ShowusersComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }