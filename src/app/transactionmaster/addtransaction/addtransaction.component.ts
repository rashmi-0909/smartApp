import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import {TransactionmasterService}from'src/app/_services/transactionmaster.service';

import { TransactionMasterModel } from 'src/app/_models/transactionmaster';
// import { Component, Input } from '@angular/core'



@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit {

 
  public show:boolean = true;
  
  form: FormGroup;
  trxId: string;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
  

  

  constructor(
    private transactionService: TransactionmasterService,
    
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  
     this.trxId= this.route.snapshot.params['trxId'];
    this.isAddMode = !this.trxId;   
        this.form = this.formBuilder.group({
          
          trxId: ['', Validators.required],
          trxDetail: ['', Validators.required],
          drCr: ['', Validators.required],
          
          accountId1: ['', Validators.required],
          accountId2: ['', Validators.required],
          accountId3: ['', Validators.required],
      });
        console.log(this.form);
       
        
      if(!this.isAddMode) {

           debugger;
       
           console.log('strt fetching');
        this.transactionService.getById(this.trxId)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));
         
    }
    






  }

  

  get f() { return this.form.controls; }

  onSubmit() {
    console.log('hello');
    
   this.submitted = true;
       
     if (this.form.invalid) {
       return;
   }

    // this.loading = true;
   if (this.isAddMode) {
       this.addtransaction();
    } 
    else {
       this.updatetransaction();
  }
 }
  


  addtransaction(): void {
 
  // this.errors = [];
      console.log(this.form);
      console.log('in addaccount');
   this.transactionService.addTransaction(this.form.value)
     .subscribe((res:any ) => {
       if(res.succeded)
        console.log(res.data);
        this.router.navigate(['/transactiomaster'], { queryParams: { registered: 'success' } });
     //  this.router.navigate(['/transactionmaster']);
       // this.toaster.success('Record For CGST has been inserted Successfully!!', 'Register CGST');
      },
       (errorResponse) => {
        // this.errors.push(errorResponse.error.error);
         //console.log(this.errors);
       });
       
  
 }


 updatetransaction() {
    console.log('in update');
    this.transactionService.editTransaction(this.form.value)
        .pipe(first())
        .subscribe((res:any ) => {
          if(res.succeded)
           console.log(res.data);
          this.router.navigate(['/transactionmaster'], { queryParams: { updated: 'success' } });
         },
           
        );
}
 







}
