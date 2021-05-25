import { Component, OnInit, OnDestroy } from '@angular/core';
import { IgstService } from '../_services/igst.service';
import { SharedService } from '../_services/shared.service';
import { IgstModel } from '../_models/igstmodel';
import { Pagination } from '../_models/pagination ';
import { IgstParams } from '../_models/igstparams';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SharedserviceModel } from '../_models/sharedservicemodel';

@Component({
  selector: 'app-igst-list',
  templateUrl: './igst-list.component.html',
  styleUrls: ['./igst-list.component.css']
})
export class IgstListComponent implements OnInit {

  public editdata: SharedserviceModel;
  igsts: IgstModel[];
  subscription: Subscription;
  addflag: boolean;
  editflag: boolean;
  igstId: IgstModel;
   pagination: Pagination;
  igstParams: IgstParams;
  sortByList = [{ value: 'igstId', display: 'Id' }, { value: 'igstDetail', display: 'Detail' }, { value: 'igstRate', display: 'Rate' }];
  pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];

  constructor(private igstService: IgstService, private router: Router, private toastr: ToastrService, private sharedservice: SharedService) {
    this.igstParams = new IgstParams();
    this.editdata = new SharedserviceModel(false, "");
  }
  ngOnInit(): void 
  {
    this.loadIgstList();

  }
  
  loadIgstList() {
    this.igstService.getAllIgst(this.igstParams).subscribe(response => {
      this.igsts = response.result;
      this.pagination = response.pagination;
    })
  }
  resetFilters() {
    this.igstParams = new IgstParams();
    this.loadIgstList();
  }
  addNewRecord() {
    this.editdata.flag = false;
    this.editdata.id = "";
    this.sharedservice.changeObject(this.editdata);
    console.log('adding new record');
    this.router.navigateByUrl('addigst');
  }
  deleteIgst(igstId: number)
  {
  const igst = this.igsts.find(x => x.igstId === igstId);
  if (confirm("Delete this IGST Details?")) 
  {
    this.igstService.deleteIgst(igstId)
    .pipe(first())
    .subscribe(() => this.igsts = this.igsts.filter(x => x.igstId !== igstId));
  }
  }
  gotoIgstDetails(url: string, id: string) 
  {
    this.editdata.flag = true;
    this.editdata.id = id;
    this.sharedservice.changeObject(this.editdata);
    var myurl = `${url}`;
    this.router.navigateByUrl(myurl).then(e => 
    {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
  pageChanged(event: any) {
    //debugger;
    this.igstParams.pageNumber = event.page;
    this.loadIgstList();
  }

}
