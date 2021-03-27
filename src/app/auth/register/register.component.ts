import { Component, OnInit } from '@angular/core';
import { AccountService} from 'src/app/_services/account.service';

import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public show:boolean = true;
  form: FormGroup;
  userName:string;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
 

  constructor(private  accountservice:AccountService, private router: Router,
    
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, ) { }

  ngOnInit(): void {

    this.userName= this.route.snapshot.params['userName'];
    // this.isAddMode = !this.cgstId;   
        this.form = this.formBuilder.group({
          userName: ['', Validators.required],
          userEmailId: ['', Validators.required,Validators.email],
          Userpassword: ['', Validators.required]
         
      });
        console.log(this.form);
        // this.isAddMode = !this.cgstId;
      if(!this.isAddMode) {
       
           console.log('strt fetching');
        this.accountservice.getByName(this.userName)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));
        
    }
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
   this.router.navigate(['/user']);
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
        this.router.navigate(['/user'], { queryParams: { updated: 'success' } });
       },
         
      );
}










}
