import { Component, OnInit,OnDestroy } from '@angular/core';
import {SgstService}from'src/app/_services/sgst.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SharedService } from '../../_services/shared.service';
import { Subscription } from 'rxjs';
import { SharedserviceModel } from '../../_models/sharedservicemodel';

@Component({
  selector: 'app-addsgst',
  templateUrl: './addsgst.component.html',
  styleUrls: ['./addsgst.component.css']
})
export class AddsgstComponent implements OnInit,OnDestroy
 {
  public show:boolean = true;
  form: FormGroup;
  sgstId: number;
  sgstId_edit:string;
  editdata:SharedserviceModel;
  isEditMode: boolean;
  subscription: Subscription;
  submitted = false;
   
  constructor(private sgstservice:SgstService ,
   private router: Router,
   private formBuilder: FormBuilder, 
  private route: ActivatedRoute,
   private sharedservice:SharedService
  )
   { }

   ngOnInit(): void 
   {   console.log('ng onInit addSgst');
       this.subscription = this.sharedservice.currentObject.subscribe(ob => 
         {
           debugger; 
           this.isEditMode=ob.flag;
          this.sgstId_edit=ob.id;
         });
                           
         this.form = this.formBuilder.group({
         sgstId: ['', Validators.required],
         sgstDetail: ['', Validators.required],
         sgstRate: ['', Validators.required]
         });
          console.log(this.form);
             
         if(this.isEditMode) 
          {
            debugger;
            this.showEditData();
          }
         else{
           this.f;
         }
    }
    ngOnDestroy()
    {     
      this.subscription.unsubscribe();
    }
    showEditData()
    { debugger;
      console.log('strt fetching');
     this.sgstservice.getById(this.sgstId_edit)
      .subscribe(x => this.form.setValue(x));
    }
    get f() { return this.form.controls; }
    onSubmit() 
    {
      this.submitted = true;
      if(this.form.invalid) 
      {
        return;
      }
      if(!this.isEditMode) 
      {
         this.addsgst();
      } 
        else 
      {
        this.updatesgst();
     }
   }
  addsgst(): void 
  {
    console.log(this.form);
    this.sgstservice.addSgst(this.form.value)
     .subscribe((res:any ) => 
     {
       if(res.succeded)
         console.log(res.data);
        this.router.navigate(['/showsgst']);
           },
        (errorResponse) => 
     {
        
    });
        
   
  }

  updatesgst() 
  {
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
