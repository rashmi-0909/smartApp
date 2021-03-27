import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bankvoucher',
  templateUrl: './bankvoucher.component.html',
  styleUrls: ['./bankvoucher.component.css']
})
export class BankvoucherComponent implements OnInit {
  
  public form: FormGroup;
  public accountList: FormArray;

  // returns all form groups under contacts
  get accountFormGroup() {
    return this.form.get('accounts') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      voucherDate:[null,Validators.compose([Validators.required])],
      cashId : ['null', Validators.compose([Validators.required])],
      voucherNumber: [null, Validators.compose([Validators.required])],
     billChequeNumber: [null, Validators.compose([Validators.required])],
     Amount: [null, Validators.compose([Validators.required])],
    accounts: this.fb.array([this.createAccountontEntry()])
    });

    // set contactlist to this field
    this.accountList = this.form.get('accounts') as FormArray;
  }

  // contact formgroup
  createAccountontEntry(): FormGroup {
    return this.fb.group({
      // type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone
      accountId: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      voucherNaration: [null, Validators.compose([Validators.required])],
      drcr: [null, Validators.compose([Validators.required])],
      drcrAmount: [null, Validators.compose([Validators.required])],
    });
  }

  // add a contact form group
  addAccontEntry() {
    this.accountList.push(this.createAccountontEntry());
  }
  

  
 // get the formgroup under contacts form array
 getAccountsFormGroup(index):FormGroup {
   this.accountList = this.form.get('accounts') as FormArray;
  const formGroup = this.accountList.controls[index] as FormGroup;
  return formGroup;
}


  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }

}
