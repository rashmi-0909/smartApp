import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import {AccountmasterService}from'src/app/_services/accountmaster.service';

import { CompanyService } from 'src/app/_services/company.service';

import { CompanyModel } from 'src/app/_models/companymodel';
// import { Component, Input } from '@angular/core'



@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {
  public show:boolean = true;
  companies:CompanyModel[];
  form: FormGroup;
 compCode1:string;
 accYear1:string;
  // isAddMode!: boolean;
  // loading = false;
  submitted = false;
  

  

  constructor(private companyService: CompanyService,
    private AccountmasterService: AccountmasterService,
    
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
   
    // this.cgstId= this.route.snapshot.params['cgstId'];
    // this.isAddMode = !this.cgstId;   
        this.form = this.formBuilder.group({
           compCode: [localStorage.getItem('CompCode').toString() ],
           accYear: [localStorage.getItem('AccYear').toString()],
          accountId: ['', Validators.required],
          name: ['', Validators.required],
          opening: ['', Validators.required],
          
          curDr: ['', Validators.required],
          curCr: ['', Validators.required],
          closing: ['', Validators.required],
         
      });
      debugger;
      this.accYear1= localStorage.getItem('AccYear').toString();
      this.compCode1=  localStorage.getItem('CompCode').toString();
      console.log(this.accYear1);
      console.log(this.compCode1);
      this.form.get("accYear").setValue(this.accYear1);
      this.form.get("compCode").setValue(this.compCode1);



        console.log(this.form);
        // this.loadCompanyList();
        
    //   if(!this.isAddMode) {


       
    //        console.log('strt fetching');
    //     this.cgstservice.getById(this.cgstId)
    //         .pipe(first())
    //         .subscribe(x => this.form.patchValue(x));
         
    // }
    






  }

  // loadCompanyList() {
  //   this.companyService.getAllCompany().subscribe(companyList => {
   
  //     this.companies = companyList;
      
  //   })
  // }

  get f() { return this.form.controls; }

  onSubmit() {
   this.submitted = true;
       
     if (this.form.invalid) {
       return;
   }

   //  this.loading = true;
  //  if (this.isAddMode) {
       this.addaccount();
  //  } 
  //  else {
  //      this.updateaccount();
  //  }
}


 addaccount(): void {
 
  // this.errors = [];
      console.log(this.form);
      console.log('in addaccount');
   this.AccountmasterService.addAccount(this.form.value)
     .subscribe((res:any ) => {
       if(res.succeded)
        console.log(res.data);
       // this.router.navigate(['/showcgst'], { queryParams: { registered: 'success' } });
       this.router.navigate(['/accountmaster']);
       // this.toaster.success('Record For CGST has been inserted Successfully!!', 'Register CGST');
      },
       (errorResponse) => {
        // this.errors.push(errorResponse.error.error);
         //console.log(this.errors);
       });
       
  
 }


 updateaccount() {
    console.log('in update');
    this.AccountmasterService.editAccount(this.form.value)
        .pipe(first())
        .subscribe((res:any ) => {
          if(res.succeded)
           console.log(res.data);
          this.router.navigate(['/accountmaster'], { queryParams: { updated: 'success' } });
         },
           
        );
}
 








}
