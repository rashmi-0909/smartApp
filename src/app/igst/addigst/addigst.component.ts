import { Component, OnInit } from '@angular/core';
import {IgstService}from'src/app/_services/igst.service';
import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-addigst',
  templateUrl: './addigst.component.html',
  styleUrls: ['./addigst.component.css']
})
export class AddigstComponent implements OnInit {
  public show:boolean = true;
  form: FormGroup;
  igstId: number;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
  constructor(private igstservice:IgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

 
    this.igstId= this.route.snapshot.params['igstId'];
    this.isAddMode = !this.igstId;   
        this.form = this.formBuilder.group({
          igstId: ['', Validators.required],
          igstDetail: ['', Validators.required],
          igstRate: ['', Validators.required]
         
      });
        console.log(this.form);
        this.isAddMode = !this.igstId;
      if(!this.isAddMode) {
       
           console.log('strt fetching');
        this.igstservice.getById(this.igstId)
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
       this.addigst();
   } 
   else {
       this.updateigst();
   }
}


 addigst(): void {

  // this.errors = [];
      console.log(this.form);
      console.log('in addigst');
   this.igstservice.addIgst(this.form.value)
     .subscribe((res:any ) => {
       if(res.succeded)
        console.log(res.data);
       // this.router.navigate(['/showigst'], { queryParams: { registered: 'success' } });
       this.router.navigate(['/showigst']);
       // this.toaster.success('Record For igst has been inserted Successfully!!', 'Register igst');
      },
       (errorResponse) => {
        // this.errors.push(errorResponse.error.error);
         //console.log(this.errors);
       });
       
  
 }

 updateigst() {
   console.log('in update');
   this.igstservice.editIgst(this.form.value)
       .pipe(first())
       .subscribe((res:any ) => {
         if(res.succeded)
          console.log(res.data);
         this.router.navigate(['/showigst'], { queryParams: { updated: 'success' } });
        },
          
       );
}



}
