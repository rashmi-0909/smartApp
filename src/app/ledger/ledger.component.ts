import { Component, OnInit } from '@angular/core';
import{LedgerModel}from 'src/app/_models/ledgermodel';
import{LedgerService}from 'src/app/_services/ledger.service';
import{LedgerParamModel}from 'src/app/_models/ledgerparam';
import { Pagination } from 'src/app/_models/pagination ';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit 
{ filterTerm:any;
  ledgers:LedgerModel[];
  ledgerparam:LedgerParamModel;
  pagination: Pagination;
  sortByList = [{ value: 'vouNo', display: 'vouNo' }, { value: 'vouDate', display: 'vouDate' }, { value: 'trxType', display: 'trxType'},
   { value: 'bilChq', display: 'bilChq' },{ value: 'itemSr', display: 'itemSr' },{ value: 'accountId', display: 'accountId' },{ value: 'amount', display: 'amount' },{ value: 'corrAccountId', display: 'corrAccountId' },
   { value: 'vouDetail', display: 'vouDetail'}
   ];

  pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];

  constructor(private ledgerservice:LedgerService) 
  {  this.ledgerparam=new LedgerParamModel(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString());

  }
  
  ngOnInit(): void 
  {
    debugger;
    this.loadLedger();
  }
  loadLedger()
  { debugger;
    // this.ledgerparam=new LedgerParamModel(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString());
    this.ledgerservice.getAllLedgerByPage(this.ledgerparam).subscribe(response => {
       this.ledgers = response.result ;
       this.pagination = response.pagination;
})

 }
 resetFilters() {
  this.ledgerparam= new LedgerParamModel(localStorage.getItem('CompCode').toString(),localStorage.getItem('AccYear').toString());
  this.loadLedger();
}
pageChanged(event: any) 
{
 
  this.ledgerparam.pageNumber = event.page;
  this.loadLedger();
}
Search()
{console.log('searching..');
}

}
