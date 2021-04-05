import { Component, OnInit,Input } from '@angular/core';
import {CgstService}from'src/app/_services/cgst.service';
// import { Component, Input } from '@angular/core'
//import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-addeditcgst',
  templateUrl: './addeditcgst.component.html',
  styleUrls: ['./addeditcgst.component.css']
})
export class AddeditcgstComponent implements OnInit {
  public show:boolean = true;
  form: FormGroup;
  cgstId: number;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
 
  
  constructor(private cgstservice:CgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
     )
   { }

   ngOnInit(): void {

    
    this.cgstId= this.route.snapshot.params['cgstId'];
    this.isAddMode = !this.cgstId;   
        this.form = this.formBuilder.group({
          cgstId: ['', Validators.required],
          cgstDetail: ['', Validators.required],
          cgstRate: ['', Validators.required]
         
      });
        console.log(this.form);
        this.isAddMode = !this.cgstId;
      if(!this.isAddMode) {
       
           console.log('strt fetching');
        this.cgstservice.getById(this.cgstId)
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
        this.addcgst();
    } 
    else {
        this.updatecgst();
    }
}


  addcgst(): void {

   // this.errors = [];
       console.log(this.form);
       console.log('in addcgst');
    this.cgstservice.addCgst(this.form.value)
      .subscribe((res:any ) => {
        if(res.succeded)
         console.log(res.data);
        // this.router.navigate(['/showcgst'], { queryParams: { registered: 'success' } });
        this.router.navigate(['/showcgst']);
        // this.toaster.success('Record For CGST has been inserted Successfully!!', 'Register CGST');
       },
        (errorResponse) => {
         // this.errors.push(errorResponse.error.error);
          //console.log(this.errors);
        });
        
   
  }

  updatecgst() {
    console.log('in update');
    this.cgstservice.editCgst(this.form.value)
        .pipe(first())
        .subscribe((res:any ) => {
          if(res.succeded)
           console.log(res.data);
          this.router.navigate(['/showcgst'], { queryParams: { updated: 'success' } });
         },
           
        );
}


}
