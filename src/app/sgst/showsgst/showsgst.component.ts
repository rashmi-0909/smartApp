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
import { SharedService } from '../../_services/shared.service';
import { Subscription } from 'rxjs';
import { SharedserviceModel } from '../../_models/sharedservicemodel';


@Component({
  selector: 'app-showsgst',
  templateUrl: './showsgst.component.html',
  styleUrls: ['./showsgst.component.css']
})
export class ShowsgstComponent implements OnInit {
  public editdata: SharedserviceModel;
  sgsts: SgstModel[];
  subscription: Subscription;
  editflag: boolean;
  sgstId:SgstModel;
  pagination: Pagination;
  sgstParams:SgstParams;
  sortByList = [{ value: 'sgstId', display: 'Id' }, { value: 'sgstDetail', display: 'Detail' }, { value: 'sgstRate', display: 'Rate' }];
  pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
   
    constructor(private sgstService: SgstService ,private router:Router, private sharedservice: SharedService) {
    this.sgstParams = new SgstParams();
    this.editdata = new SharedserviceModel(false, "");
   }

  ngOnInit(): void {
    this.loadSgstList();
  }

  loadSgstList() 
  {
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
    this.editdata.flag = false;
    this.editdata.id = "";
    this.sharedservice.changeObject(this.editdata);
    console.log('adding new record');
    this.router.navigateByUrl('addsgst');
  }

  pageChanged(event: any) {
    //debugger;
    this.sgstParams.pageNumber = event.page;
    this.loadSgstList();
  }

  deleteSgst(sgstId:number) 
  {
    const sgst = this.sgsts.find(x => x.sgstId ===sgstId);
    if (!sgst) return;
    if (confirm("Delete this SGST Details?")) 
    {
         this.sgstService.deleteSgst(sgstId)
        .pipe(first())
        .subscribe(() => this.sgsts = this.sgsts.filter(x => x.sgstId !== sgstId));
        // this.router.navigateByUrl('');
    }
  }
   gotoSgstDetails(url:string, id:string)
   {
      this.editdata.flag = true;
      this.editdata.id = id;
      this.sharedservice.changeObject(this.editdata); 
      var myurl = `${url}`;
      this.router.navigateByUrl(myurl).then(e => 
    {
      if (e) 
      {
      console.log("Navigation is successful!");
      } 
       else    
      {
      console.log("Navigation has failed!");
      }
    });
    }
  

}
     
    
   
   
      



