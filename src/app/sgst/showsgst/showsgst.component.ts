import { Component, OnInit } from '@angular/core';

import { SgstService } from 'src/app/_services/sgst.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { SgstModel } from '../../_models/sgstmodel'
import { Pagination } from '../../_models/pagination ';
import { SgstParams } from '../../_models/sgstparams';
@Component({
  selector: 'app-showsgst',
  templateUrl: './showsgst.component.html',
  styleUrls: ['./showsgst.component.css']
})
export class ShowsgstComponent implements OnInit {
  sgsts: SgstModel[];
  isDeleting:boolean= false;
  sgstId:SgstModel;
  pagination: Pagination;
  sgstParams:SgstParams;
  sortByList = [{ value: 'sgstId', display: 'Id' }, { value: 'sgstDetail', display: 'Detail' }, { value: 'sgstRate', display: 'Rate' }];
  pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
   

  constructor(private sgstService: SgstService ,private router:Router) {
    this.sgstParams = new SgstParams();
   }

  ngOnInit(): void {
    this.loadSgstList();
  }

  loadSgstList() {
    this.sgstService.getAllSgst(this.sgstParams).subscribe(response => {
      // debugger;
      this.sgsts = response.result;
      this.pagination = response.pagination;
    })
  }
  resetFilters() {
    this.sgstParams = new SgstParams();
    this.loadSgstList();
  }

  addNewRecord() {
    console.log('adding new record');
    this.router.navigateByUrl('addsgst');
  }


  pageChanged(event: any) {
    //debugger;
    this.sgstParams.pageNumber = event.page;
    this.loadSgstList();
  }











  deleteSgst(sgstId:number) {
    const sgst = this.sgsts.find(x => x.sgstId ===sgstId);
    if (!sgst) return;
    this.isDeleting = true;
    this.sgstService.deleteSgst(sgstId)
        .pipe(first())
        .subscribe(() => this.sgsts = this.sgsts.filter(x => x.sgstId !== sgstId));
        // this.router.navigateByUrl('');
}
  gotoSgstDetails(url, id:number){
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
     
    
   
   
      



