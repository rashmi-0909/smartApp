import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import {TypemasterService}from'src/app/_services/typemaster.service';

import { CompanyService } from 'src/app/_services/company.service';

import { CompanyModel } from 'src/app/_models/companymodel';
// import { Component, Input } from '@angular/core'



@Component({
  selector: 'app-addtypemaster',
  templateUrl: './addtypemaster.component.html',
  styleUrls: ['./addtypemaster.component.css']
})
export class AddtypemasterComponent implements OnInit {

  public show:boolean = true;
  companies:CompanyModel[];
  form: FormGroup;
 
  // isAddMode!: boolean;
  // loading = false;
  submitted = false;
  

  

  constructor(private companyService: CompanyService,
    private TypemasterService: TypemasterService,
    
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  

    // this.cgstId= this.route.snapshot.params['cgstId'];
    // this.isAddMode = !this.cgstId;   
        this.form = this.formBuilder.group({
          compCode: ['', Validators.required],
          accYear: ['', Validators.required],
          trxCd: ['', Validators.required],
          trxDetail: ['', Validators.required],
          prefix: ['', Validators.required],
          
          itemSr: ['', Validators.required],
          
         
      });
        console.log(this.form);
        this.loadCompanyList();
        
    //   if(!this.isAddMode) {


       
    //        console.log('strt fetching');
    //     this.cgstservice.getById(this.cgstId)
    //         .pipe(first())
    //         .subscribe(x => this.form.patchValue(x));
         
    // }
    






  }

  loadCompanyList() {
    this.companyService.getAllCompany().subscribe(companyList => {
   
      this.companies = companyList;
      
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
   this.submitted = true;
       
     if (this.form.invalid) {
       return;
   }

   //  this.loading = true;
  //  if (this.isAddMode) {
       this.addtype();
  //  } 
  //  else {
  //      this.updateaccount();
  //  }
}


 addtype(): void {
 
  // this.errors = [];
      console.log(this.form);
      console.log('in addaccount');
   this.TypemasterService.addType(this.form.value)
     .subscribe((res:any ) => {
       if(res.succeded)
        console.log(res.data);
       // this.router.navigate(['/showcgst'], { queryParams: { registered: 'success' } });
       this.router.navigate(['typemaster']);
       // this.toaster.success('Record For CGST has been inserted Successfully!!', 'Register CGST');
      },
       (errorResponse) => {
        // this.errors.push(errorResponse.error.error);
         //console.log(this.errors);
       });
       
  
 }


//  updatetype() {
//     console.log('in update');
//     this.TypemasterService.(this.form.value)
//         .pipe(first())
//         .subscribe((res:any ) => {
//           if(res.succeded)
//            console.log(res.data);
//           this.router.navigate(['/accountmaster'], { queryParams: { updated: 'success' } });
//          },
           
//         );
// }
 










}
