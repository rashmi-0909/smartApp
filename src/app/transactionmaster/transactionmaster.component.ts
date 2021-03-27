import { Component, OnInit } from '@angular/core';
import { TransactionmasterService } from 'src/app/_services/transactionmaster.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Pagination } from '../_models/pagination ';
import { TransactionmasterParams } from '../_models/transactionmasterparams';
import { TransactionMasterModel } from '../_models/transactionmaster';


@Component({
  selector: 'app-transactionmaster',
  templateUrl: './transactionmaster.component.html',
  styleUrls: ['./transactionmaster.component.css']
})
export class TransactionmasterComponent implements OnInit {
  
  transactions: TransactionMasterModel[];
  // isDeleting:boolean= false;
   trxId:TransactionMasterModel;
   pagination: Pagination;
   transactionmasterParams: TransactionmasterParams;
   sortByList = [{ value: 'trxId', display: 'Id' }, { value: 'drCr', display: 'Debit/Credit' }, { value: 'trxDetail', display: 'Transaction Detail' },
   { value: 'accountId1', display: 'AccountId1' },
   { value: 'accountId2', display: 'AccountId2' },
   { value: 'accountId3', display: 'AccountId3' }];
   pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
    isDeleting:boolean= false;
 
   constructor(private transactionService: TransactionmasterService ,private router:Router) {
     this.transactionmasterParams = new TransactionmasterParams();
    }
 
  ngOnInit(): void {
    this.loadTranactionList();
  }

  loadTranactionList() {
    this.transactionService.getAllTransactionMaster(this.transactionmasterParams).subscribe(response => {
      // debugger;
      this.transactions = response.result;
      this.pagination = response.pagination;
    })
  }
  resetFilters() {
    this.transactionmasterParams = new TransactionmasterParams();
    this.loadTranactionList();
  }

  addNewTransaction() {
    console.log('adding new record');
    // this.router.navigateByUrl('addtransaction');
  }


  pageChanged(event: any) {
    //debugger;
    this.transactionmasterParams.pageNumber = event.page;
    this.loadTranactionList();
  }





  deleteTransaction(trxId:string) {
    const transaction = this.transactions.find(x => x.trxId ===trxId);
    if (!transaction) return;
    this.isDeleting = true;
     this.transactionService.deleteTransaction(trxId)
       .pipe(first())
         .subscribe(() => this.transactions = this.transactions.filter(x => x.trxId !== trxId));
         
}
  gotoTransactionDetails(url, id:string){
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
  




}
