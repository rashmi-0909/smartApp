import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";


import { CompanyService } from 'src/app/_services/company.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CompanyModel } from 'src/app/_models/companymodel';

// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {


  public show: boolean = true;
  public AccYear1: string;
  form: FormGroup;
  compCode: string;
  isAddMode!: boolean;
  // loading = false;
  submitted = false;
  isSet = false;
  isDatewrong: boolean;
  //date compare declaration
  sDate: string;
  eDate: string;
  error: any = { isError: false, errorMessage: '' };
  isValidDate: any;
  editcompany:CompanyModel;
   edityend:Date;
   editybegin:Date;
  //end of date compare declaration

  constructor(private companyservice: CompanyService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //  debugger;
    this.compCode = this.route.snapshot.params['compCode'];
    this.isAddMode = !this.compCode;
    this.form = this.formBuilder.group({
      compCode: ['', Validators.required],
      name:['',Validators.required],
      taxId: ['', Validators.required],
            
      yearEnd: ['', Validators.required],
      yearBegin: ['', Validators.required],
      accYear: [''],
      autoVoucher: ['yes', [Validators.required]],
      billMatch: ['yes', [Validators.required]],


      address: ['', Validators.required]
    },{validator: this.dateLessThan('yearBegin', 'yearEnd')});
    // debugger;
    this.setAccYear(Event);

    // var date = new Date(this.form.get('yearBegin').value);  
    // let str = date.toDateString();  
    // console.log(str) //Tue Mar 07 2017  
    // console.log(typeof str) // string  



    //debugger;
    // this.isValidDate = this.validateDates(this.form.get('yearBegin').value, this.form.get('yearEnd').value);
    console.log(this.form);
    this.isAddMode = !this.compCode;
    if (!this.isAddMode) {

      console.log('strt fetching');
  //     let companyObservable: Observable<CompanyModel[]> = 
  //  this.companyservice.getById(this.compCode);
  //  companyObservable.subscribe(editcompany => {
  //      this.editcompany = editcompany; 
  //      this.form.controls['contact'].setValue(this.contacts[0])
  //  });
      this.companyservice.getById(this.compCode)
        .pipe(first())
        .subscribe(x => {this.form.patchValue(x)
             this.edityend=x.yearEnd;
             
             this.editybegin=x.yearBegin;
        });
        this.form.get("yearEnd").patchValue(this.edityend);
        this.form.get("yearBegin").patchValue(this.editybegin);
        console.log('edit');
        console.log(this.form);
        

// this.companyservice.getById(this.compCode)
// .subscribe(company => {
   
//   this.editcompany = company;
// });


// this.form.setValue({
//   compCode:[this.editcompany.compCode],
//   accYear: [this.editcompany.accYear],
//   Name: [this.editcompany.Name],
//   yearEnd:[this.editcompany.yearEnd],
//   yearBegin:[this.editcompany.yearBegin] ,
//   taxId:[this.editcompany.taxId],
//   autoVoucher:[this.editcompany.autoVoucher],
//   billMatch:[this.editcompany.billMatch]
// });


       
    }
  }

  get f() { return this.form.controls; }

  dateLessThan(begin: string, end: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let b = group.controls[begin];
     let e = group.controls[end];
     if (b.value > e.value ) {
        {
      return  this.error={isError:true,errorMessage:'End date should be grater than start date.'};
        this.isValidDate = false;
       }
     }
     return {};
    }
  }




  onSubmit() {

    this.eDate = this.form.get('yearEnd').value;
    var endy = this.eDate.toString();
    this.sDate = this.form.get('yearBegin').value;
    var starty = this.sDate.toString();
    var sliced_startyear = starty.slice(13, -40);
    var sliced_endyear = endy.slice(13, -40);
    var AccYear1 = sliced_startyear + sliced_endyear;
    console.log("Accounting year is:" + AccYear1);

    this.submitted = true;

    this.isSet = true;
    if (this.form.invalid) {
      return;
    }

    //  this.loading = true;
    if (this.isAddMode) {
      this.addcompany();
      this.form.reset();
    }
    else {
      this.updatecompany();
    }
  }


  

  // validateDates(sDate: string, eDate: string){
  //   this.isValidDate = true;
  //   if((sDate == null || eDate ==null)){
  //     this.error={isError:true,errorMessage:'Start date and end date are required.'};
  //     this.isValidDate = false;
  //   }

  //   if((sDate != null && eDate !=null) && (eDate) < (sDate)){
  //     this.error={isError:true,errorMessage:'End date should be grater then start date.'};
  //     this.isValidDate = false;
  //   }
  //   return this.isValidDate;
  // }

  
  setAccYear(event) {
    this.eDate = this.form.get('yearEnd').value;
    var endy = this.eDate.toString();
    this.sDate = this.form.get('yearBegin').value;
    var starty = this.sDate.toString();
    var sliced_startyear = starty.slice(13, -40);
    var sliced_endyear = endy.slice(13, -40);
    this.AccYear1 = sliced_startyear + sliced_endyear;
    //  this.form.controls.accYear.setValue(AccYear1);
    this.form.get("accYear").patchValue(this.AccYear1);
    console.log(this.form.controls.accYear.value);
    
this.form.patchValue({
  accYear: this.AccYear1, 
  // formControlName2: myValue2 (can be omitted)
});

  }






  addcompany(): void {
    console.log('in addcompany function')
    // this.errors = [];

    this.companyservice.addCompany(this.form.value)
      .subscribe((res: any) => {
        if (res.succeded)
          console.log(res.data);
        // this.router.navigate(['/showcgst'], { queryParams: { registered: 'success' } });
        this.router.navigate(['/showcompany']);
        //  this.toastr.success('Record For Company has been inserted Successfully!!', 'Register Company');
      },
        errorResponse => {
          console.log(errorResponse);
          //  this.errors.push(errorResponse.error.error);
          //   //console.log(this.errors);
        });


  }


  updatecompany() {
    console.log('in update');
    this.companyservice.editCompany(this.form.value)
      .pipe(first())
      .subscribe((res: any) => {
        if (res.succeded)
          console.log(res.data);
        this.router.navigate(['/showcompany'], { queryParams: { updated: 'success' } });
      },

      );
  }











}










