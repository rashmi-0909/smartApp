
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl ,ValidatorFn} from '@angular/forms';
import{SalesService}from '../_services/sales.service';
import{LedgerService}from '../_services/ledger.service';
import{salepurchaseReportDetailModel}from '../_models/salepurchasedetails';
import{SalePurchaseInput}from '../_models/salepurchaseinput';
import{dateLessThan}from 'validator_date/valid1';
import {DatePipe,formatDate } from '@angular/common';
import { Serviceresponsesalepurchase } from '../_models/serviceresponsemodelsale';
import{LedgerCompany}from '../_models/ledgercompany';
import{SaleCompanyModel}from'../_models/salecompanymodel';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  form:FormGroup;
  submitted:boolean;
  
  compCode:string;
  accYear:string;
  startDate:Date;
  finishDate:Date;
  salePurchaseDetailsList:salepurchaseReportDetailModel[];
  myobject:SaleCompanyModel;
  myobject1:salepurchaseReportDetailModel;
  accountHeadSummary:salepurchaseReportDetailModel[];
  accountHeadSummaryTotal:salepurchaseReportDetailModel;
  cgstHeadSummary:salepurchaseReportDetailModel[];
  cgstHeadSummaryTotal:salepurchaseReportDetailModel;
  sgstHeadSummary:salepurchaseReportDetailModel[];
  sgstHeadSummaryTotal:salepurchaseReportDetailModel;
  igstHeadSummary:salepurchaseReportDetailModel[];
  igstHeadSummaryTotal:salepurchaseReportDetailModel;
  salepurchaseInput:SalePurchaseInput;
  fDate:string;
  tDate:string;
  
  constructor( private formBuilder: FormBuilder,private saleservice:SalesService,private ledggerservice:LedgerService,private datePipe:DatePipe) {
   this.salepurchaseInput=new SalePurchaseInput('','',this.startDate,this.finishDate,"S");
   this.myobject=new SaleCompanyModel("","");
 
  }

  ngOnInit(): void 
{ 
  this.form = this.formBuilder.group(
{
  
  startDate: ['', Validators.required],
  finishDate: ['', Validators.required],
 
},
{ validator: 
  [ dateLessThan('startDate','finishDate')]});
}  

get f() { return this.form.controls; }

onSubmit()
{
    
  //  this.showLedger=true;
  this.submitted=true;
  this.startDate=this.form.get('startDate' ).value;
  this.finishDate=this.form.get('finishDate').value;
  this.compCode=localStorage.getItem('CompCode').toString();
  this.accYear=localStorage.getItem('AccYear').toString();
  
  this.salepurchaseInput=new SalePurchaseInput(this.compCode,this.accYear,this.startDate,this.finishDate,"S");
  this.saleservice.GetSaleReport_company(this.salepurchaseInput).subscribe(response =>{ 
   
    this.myobject=response;
    console.log('company'+this.myobject);
    
  });
    this.fDate =this.datePipe.transform(this.form.get('startDate').value, 'dd-MM-yyyy');
    this.tDate =this.datePipe.transform(this.form.get('startDate').value, 'dd-MM-yyyy');
    this.saleservice.getSaleRport(this.salepurchaseInput).subscribe(response=>
      { this.salePurchaseDetailsList=response;
        
         console.log('salepurchasereportDetails'+this.salePurchaseDetailsList); 
      });
      debugger;
      this.saleservice.getSaleTotal(this.salepurchaseInput).subscribe(response=>
        { 
         
          this.myobject1=response;
           console.log('salepurchasereportDetailstotal'+this.myobject1); 
        });
     this.saleservice.getAccountHeadSummary(this.salepurchaseInput).subscribe(response=>
      {
        this.accountHeadSummary=response;
      });

      this.saleservice.getAccountHeadSummaryTotal(this.salepurchaseInput).subscribe(response=>
        {
          this.accountHeadSummaryTotal=response;
        });
  
        this.saleservice.getCgstHeadSummary(this.salepurchaseInput).subscribe(response=>
          {
            this.cgstHeadSummary=response;
          });
          this.saleservice.getCgstHeadSummaryTotal(this.salepurchaseInput).subscribe(response=>
            {
              this.cgstHeadSummaryTotal=response;
            });
            this.saleservice.getSgstHeadSummary(this.salepurchaseInput).subscribe(response=>
              {
                this.sgstHeadSummary=response;
              });

              this.saleservice.getSgstHeadSummaryTotal(this.salepurchaseInput).subscribe(response=>
                {
                  this.sgstHeadSummaryTotal=response;
                });

                this.saleservice.getIgstHeadSummary(this.salepurchaseInput).subscribe(response=>
                  {
                    this.igstHeadSummary=response;
                  });


                  this.saleservice.getIgstHeadSummaryTotal(this.salepurchaseInput).subscribe(response=>
                    {
                      this.igstHeadSummaryTotal=response;
                    });






 
}






}