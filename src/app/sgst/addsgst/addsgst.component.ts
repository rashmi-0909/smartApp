import { Component, OnInit,Input } from '@angular/core';
import {SgstService}from'src/app/_services/sgst.service';
// import { Component, Input } from '@angular/core'
//import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-addsgst',
  templateUrl: './addsgst.component.html',
  styleUrls: ['./addsgst.component.css']
})
export class AddsgstComponent implements OnInit {
  public show:boolean = true;
  form: FormGroup;
  sgstId: number;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
 
  
  constructor(private sgstservice:SgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
     )
   { }

   ngOnInit(): void {

    
    this.sgstId= this.route.snapshot.params['sgstId'];
    this.isAddMode = !this.sgstId;   
        this.form = this.formBuilder.group({
          sgstId: ['', Validators.required],
          sgstDetail: ['', Validators.required],
          sgstRate: ['', Validators.required]
         
      });
        console.log(this.form);
        this.isAddMode = !this.sgstId;
     
        if(!this.isAddMode) {
       
          console.log('strt fetching');
       this.sgstservice.getById(this.sgstId)
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
        this.addsgst();
    } 
    else {
        this.updatesgst();
    }
}


  addsgst(): void {

   // this.errors = [];
       console.log(this.form);
     
    this.sgstservice.addSgst(this.form.value)
      .subscribe((res:any ) => {
        if(res.succeded)
         console.log(res.data);
     
        this.router.navigate(['/showsgst']);
      
       },
        (errorResponse) => {
         // this.errors.push(errorResponse.error.error);
          //console.log(this.errors);
        });
        
   
  }

  updatesgst() {
    console.log('in update');
    this.sgstservice.editSgst(this.form.value)
        .pipe(first())
        .subscribe((res:any ) => {
          if(res.succeded)
           console.log(res.data);
          this.router.navigate(['/showsgst'], { queryParams: { updated: 'success' } });
         },
           
        );
}


}
