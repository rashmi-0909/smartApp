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
  igstId_edit:string;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
  constructor(private igstservice:IgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
   
          this.form = this.formBuilder.group({
             igstId: ['', Validators.required],
             igstDetail: ['', Validators.required],
             igstRate: ['', Validators.required]
        });
        console.log(this.form);
        
      if(!this.isAddMode) {
        console.log();
        console.log('strt fetching');
        this.igstId_edit=  localStorage.getItem('igstEditId');              
        this.igstservice.getById(this.igstId_edit)
          .subscribe(x => this.form.setValue(x));
       
         
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
      
       this.router.navigate(['/showigst']);
      
      },
       (errorResponse) => {
       
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
