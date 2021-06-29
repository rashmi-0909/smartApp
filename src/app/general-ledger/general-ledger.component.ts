import {Component, OnInit} from '@angular/core';
import{AccountInfoModel}from '../_models/accountinfo';
import { Pagination } from 'src/app/_models/pagination ';

import{AccountmasterService}from'../_services/accountmaster.service';
import{LedgerService}from'../_services/ledger.service';
import{GenralLedgerModel}from '../_models/generalledger';
import {AccountmasterParams } from '../_models/accountmasterparams';
import {FormBuilder, FormGroup, Validators,AbstractControl ,ValidatorFn} from '@angular/forms';
import {AccountMasterModel } from '../_models/accountmaster';
import{lederReportDetailModel}from '../_models/ledgermodeldetail';
import{Account_Header}from '../_models/ledgermodeldetail';
import{LedgerCompany}from '../_models/ledgercompany';
import{dateLessThan}from 'validator_date/valid1';
import {DatePipe,formatDate } from '@angular/common';
import { AccountHeader } from '../_models/serviceresponseledgermodel';

@Component({
  selector: 'app-general-ledger',
  templateUrl: './general-ledger.component.html',
  styleUrls: ['./general-ledger.component.css']
})
export class GeneralLedgerComponent implements OnInit 
{ 
  
form: FormGroup;
accountinfo:AccountInfoModel;
accountinfoList:AccountMasterModel;
transactioninfo:GenralLedgerModel; accountIds:AccountMasterModel[];
accountmasterParams:AccountmasterParams;
accountmastermodel:AccountMasterModel;
accountIdList:string[]=[];
submitted = false;
showLedger=false;
isValidDate:Boolean;
stAccount:number;
finAccount:number;
stDate=new Date();
fDate:string;
tDate:string;
fiDate=new Date();

 genralledgerList:lederReportDetailModel[]=[];
 company_forledger:LedgerCompany;
 myobject:object;
 pagination: Pagination;
 pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
 
 
constructor(private ledgerservice:LedgerService,private accountmasterservice:AccountmasterService, private formBuilder: FormBuilder, private datePipe:DatePipe) 
{ 
  this.accountinfo=new AccountInfoModel(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString(),"60501");
  this.transactioninfo=new GenralLedgerModel("","", this.stDate,this.fiDate ,"","");
  this.accountmasterParams = new AccountmasterParams(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString());
  this.myobject={};
}

ngOnInit(): void 
{ 
  this.form = this.formBuilder.group(
{
  accountIdSelect: ['', Validators.required],
  startDate: ['', Validators.required],
  finishDate: ['', Validators.required],
  startAccount:['', Validators.required],
  finishAccount:['', Validators.required]
},
{ validator: 
  [ dateLessThan('startDate','finishDate')]});
    this.loadAccountIds();
} 

get f() { return this.form.controls; }

 loadAccountIds()
{      
this.accountmasterservice.AccountGetAll(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString()).subscribe(response =>
  {    
  this.accountIds = response;
  this.accountIdList= this.accountIds.map(element => element.accountId+':'+element.name);
  console.log('new array is'+this.accountIdList);
  console.log(this.accountIdList[0]);
  }
  );
}

selectChange(e)
{    
  console.log('hi');
  const value = e.target.value;
  console.log(value);
  var temAccountId=(this.form.get('accountIdSelect' ).value);
  var splited=  temAccountId.split(":");
  console.log('accountId is'+splited[0]);
  this.accountinfo.accountId=splited[0];
  console.log('accountInfoId'+this.accountinfo.accountId);
  this.ledgerservice.getById(this.accountinfo).subscribe(response=>{
  this.accountinfoList=response;
  console.log(this.accountinfoList)
  this.form.get('startAccount' ).patchValue(this.accountinfoList.accountId);
  this.form.get('finishAccount' ).patchValue(this.accountinfoList.accountId);
  
  });
 
}

onSubmit()
{
  
  this.showLedger=true;
  this.submitted=true;
  
  this.transactioninfo.compCode=localStorage.getItem('CompCode').toString();
  this.transactioninfo.accYear=localStorage.getItem('AccYear').toString();
  console.log(this.form.get('startDate' ).value);
  
  this.transactioninfo.startDate=this.form.get('startDate' ).value;
  this.transactioninfo.finishDate=this.form.get('finishDate' ).value;           
   
  this.transactioninfo.startAccount=this.form.get('startAccount' ).value;
  this.transactioninfo.finishAccount=this.form.get('finishAccount' ).value;
 
    
  this.ledgerservice.GetGenralLedger_company(this.transactioninfo).subscribe(response =>{ 
   
    this.company_forledger=response;
    console.log('company '+this.company_forledger);
    this.myobject=response;
  });
   

  
  this.fDate =this.datePipe.transform(this.form.get('startDate').value, 'dd-MM-yyyy');
  this.tDate =this.datePipe.transform(this.form.get('startDate').value, 'dd-MM-yyyy');
 this.ledgerservice.GetGenralLedger(this.transactioninfo).subscribe(response =>{ 
   
    this.genralledgerList=response;
      
    
    console.log('ledger show list is'+ this.genralledgerList);
   

  });
}
 
}





