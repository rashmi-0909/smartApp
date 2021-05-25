import { Component, OnInit,OnDestroy } from '@angular/core';
import {IgstService}from'src/app/_services/igst.service';
import{ SharedService }from 'src/app/_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import{SharedserviceModel} from 'src/app/_models/sharedservicemodel';

@Component({
  selector: 'app-addigst',
  templateUrl: './addigst.component.html',
  styleUrls: ['./addigst.component.css']
})
export class AddigstComponent implements OnInit,OnDestroy  {
  public show:boolean = true;
  form: FormGroup;
  igstId: number;
  editdata:SharedserviceModel;

   igstId_edit:string;
  isEditMode: boolean;
  subscription: Subscription;
  submitted = false;
  constructor(private igstservice:IgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private sharedservice:SharedService) { }

ngOnInit(): void 
{   console.log('ng onInit addIgst');
    this.subscription = this.sharedservice.currentObject.subscribe(ob => 
      {
        debugger; 
        this.isEditMode=ob.flag;
       this.igstId_edit=ob.id;
      });
                        
      this.form = this.formBuilder.group({
      igstId: ['', Validators.required],
      igstDetail: ['', Validators.required],
      igstRate: ['', Validators.required]
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
       this.igstservice.getById(this.igstId_edit)
      .subscribe(x => this.form.setValue(x));
  }
  get f() { return this.form.controls; }
  onSubmit() 
  {
    this.submitted = true;
    if (this.form.invalid) 
    {
          return;
    }
    if (!this.isEditMode) 
    {
         this.addigst();
    } 
      else 
    {
       this.updateigst();
   }
 }
 addigst(): void 
 {  console.log(this.form);
    console.log('in addigst');
    this.igstservice.addIgst(this.form.value)
    .subscribe((res:any ) => 
    {
      if(res.succeded)
        console.log(res.data);
        this.router.navigate(['/showigst']);
      },
      (errorResponse) => 
      {
      });
      }
 updateigst() 
{
  console.log('in update');
  this.igstservice.editIgst(this.form.value)
  .pipe(first())
  .subscribe((res:any ) =>
  {
  if(res.succeded)
    console.log(res.data);
    this.router.navigate(['/showigst'], { queryParams: { updated: 'success' } });
  },
  );
}
}
