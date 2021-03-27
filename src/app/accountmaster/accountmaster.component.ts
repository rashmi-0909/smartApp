import { Component, OnInit } from '@angular/core';


import { CompanyService } from 'src/app/_services/company.service';
import { AccountmasterService } from 'src/app/_services/accountmaster.service';
import { Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Pagination } from '../_models/pagination ';
import { AccountmasterParams } from '../_models/accountmasterparams';
import { AccountMasterModel } from '../_models/accountmaster';
import { CompanyModel } from '../_models/companymodel';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountmaster',
  templateUrl: './accountmaster.component.html',
  styleUrls: ['./accountmaster.component.css']
})
export class AccountmasterComponent implements OnInit {
  form:FormGroup;
  accounts: AccountMasterModel[];
  companies:CompanyModel[];
  isDeleting:boolean= false;
  // compCode:CompanyModel;
  
  // isDeleting:boolean= false;
  //  compCode:AccountMasterModel;
  //  accYear:AccountMasterModel;
   name:AccountMasterModel;
   pagination: Pagination;
  public accountmasterParams: AccountmasterParams;
   sortByList = [{ value: 'compCode', display: 'CompCode' },
    { value: 'accYear', display: 'Accounting Year' }, 
    { value: 'accountId', display: 'AccountId' },
    { value: 'name', display: 'AccountName' },
    { value: 'opening', display: 'Operning Balance' },
    { value: 'curDr', display: 'Current Debit' },
    { value: 'curCr', display: 'Current Credit' },
    { value: 'closing', display: 'Closing Balance' }

  ];




   pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
    // isDeleting:boolean= false;
 







  
  constructor(private companyservice: CompanyService,
    private accountmasterService:AccountmasterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.accountmasterParams = new AccountmasterParams();


     }
  ngOnInit(): void {
    
    this.loadCompanyList();

    this.form = this.formBuilder.group({
      compCode: ['', Validators.required],
      accYear: ['',Validators.required],
      sortBy:[''],
      pageSize:['']
    });

   

       this.loadAccountList();
  }

 
  loadCompanyList() {
    this.companyservice.getAllCompany().subscribe(companyList => {
   
      this.companies = companyList;
      console.log(this.companies);
    })
  }
  loadAccountList() {
    this.accountmasterParams.compCode=this.form.controls['compCode'].value;
    this.accountmasterParams.accYear=this.form.controls['accYear'].value;
    this.accountmasterService.getAllAccountMaster(this.accountmasterParams).subscribe(response => {
        // debugger;
        this.accounts = response.result;
        this.pagination = response.pagination;
    
    })
  }

  resetFilters() {
    this.accountmasterParams = new AccountmasterParams();
    this.loadAccountList();
  }

  addNewRecord() {
    console.log('adding new record');
    this.router.navigateByUrl('addaccount');
  }


  


  pageChanged(event: any) {
    //debugger;
    this.accountmasterParams.pageNumber = event.page;
    this.loadAccountList();
  }






//   deleteCompany(compCode:string) {
//     const company = this.companies.find(x => x.compCode ===compCode);
//     if (!company) return;
//     this.isDeleting = true;
//     this.companyService.deleteCompany(compCode)
//         .pipe(first())
//         .subscribe(() => this.companies = this.companies.filter(x => x.compCode !== compCode));
//         // this.router.navigateByUrl('');
// }
  // gotoCompanyDetails(url, id:string){
  //   var myurl = `${url}/${id}`;
  //   this.router.navigateByUrl(myurl).then(e => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }
  

}
