import { Component, OnInit } from '@angular/core';

import { AccountService} from 'src/app/_services/account.service';
import{CompanyService}from 'src/app/_services/company.service';
import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import{CompanyModel}from 'src/app/_models/companymodel';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  //public show:boolean = true;
  form: FormGroup;
  userName:string;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
 companyList: CompanyModel[];
 
  constructor(private  accountservice:AccountService,private  companyservice:CompanyService
     ,private router: Router,
    
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
      this.loadCompanyList();
    this.userName= this.route.snapshot.params['userName'];
     this.isAddMode = !this.userName;   
        this.form = this.formBuilder.group({
          compCode: ['', Validators.required],
          userName: ['', Validators.required],
          userEmailId: ['', Validators.required],
          userPassword: ['', Validators.required]
         
      });
        console.log(this.form);
        this.isAddMode = !this.userName;
      if(!this.isAddMode) {
            debugger;
           console.log('strt fetching');
        this.accountservice.getByName(this.userName)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));
        
    }
  }

  loadCompanyList() {
    this.companyservice.getAllCompany().subscribe(companyList => {
   
      this.companyList = companyList;
    })
  }

    get f() { return this.form.controls; }

    onSubmit() {
     this.submitted = true;
         
       if (this.form.invalid) {
         return;
     }
  
     //  this.loading = true;
     if (this.isAddMode) {
         this.registerUser();
     } 
     else {
         this.updateUser();
     }
  }
  
  
  registerUser():void{
    console.log(this.form);
    console.log('in registerUser');
  this.accountservice.register(this.form.value)
   .subscribe((res:any ) => {
     if(res.succeded)
      console.log(res.data);
     // this.router.navigate(['/showcgst'], { queryParams: { registered: 'success' } });
     this.router.navigate(['/showusers']);
     // this.toaster.success('Record For CGST has been inserted Successfully!!', 'Register CGST');
    },
     (errorResponse) => {
      // this.errors.push(errorResponse.error.error);
       //console.log(this.errors);
     });
     
  }
  updateUser():void{
    console.log('in update');
    this.accountservice.editUser(this.form.value)
        .pipe(first())
        .subscribe((res:any ) => {
          if(res.succeded)
           console.log(res.data);
          this.router.navigate(['/showusers'], { queryParams: { updated: 'success' } });
         },
           
        );


  }






}
