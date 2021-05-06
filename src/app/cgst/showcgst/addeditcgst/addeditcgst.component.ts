import { Component, OnInit,Input} from '@angular/core';
import {CgstService}from'src/app/_services/cgst.service';
import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CgstModel } from 'src/app/_models/cgstmodel';

@Component({
  selector: 'app-addeditcgst',
  templateUrl: './addeditcgst.component.html',
  styleUrls: ['./addeditcgst.component.css']
})
  export class AddeditcgstComponent implements OnInit {
    
  public show:boolean = true;
  form: FormGroup;
  isAddMode!: boolean;
  submitted = false;
  cgstEdit:CgstModel;
  cgstId_edit:string;
  constructor(private cgstservice:CgstService ,
    private router: Router,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,)
    { }

    ngOnInit(): void {
      
        this.form = this.formBuilder.group({
          cgstId: ['', Validators.required],
          cgstDetail: ['', Validators.required],
          cgstRate: ['', Validators.required]
            });
        if(!this.isAddMode) {
            
            console.log();
            console.log('strt fetching');
            this.cgstId_edit=  localStorage.getItem('cgstEditId');              
            this.cgstservice.getById(this.cgstId_edit)
              .subscribe(x => this.form.setValue(x));
           
    }
    
    
  }
    get f() { return this.form.controls; }
    onSubmit() {
    this.submitted = true;
      if (this.form.invalid) {
        return;
    }
    if (this.isAddMode) {
        this.addcgst();
    } 
    else {
        this.updatecgst();
    }
  }
addcgst(): void {

      console.log(this.form);
      console.log('in addcgst');
  this.cgstservice.addCgst(this.form.value)
    .subscribe((res:any ) => {
      if(res.succeded)
        console.log(res.data);
      
      this.router.navigate(['/showcgst']);
      
      },
      (errorResponse) => {
        
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
