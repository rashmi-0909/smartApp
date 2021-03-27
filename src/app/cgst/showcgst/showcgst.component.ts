import { Component, OnInit } from '@angular/core';
import { CgstService } from 'src/app/_services/cgst.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Pagination } from '../../_models/pagination ';
import { CgstParams } from '../../_models/cgstparams';
import { CgstModel } from '../../_models/cgstmodel';

@Component({
  selector: 'app-showcgst',
  templateUrl: './showcgst.component.html',
  styleUrls: ['./showcgst.component.css']
})

export class ShowcgstComponent implements OnInit {
  cgsts: CgstModel[];
 // isDeleting:boolean= false;
  cgstId:CgstModel;
  pagination: Pagination;
  cgstParams: CgstParams;
  sortByList = [{ value: 'cgstId', display: 'Id' }, { value: 'cgstDetail', display: 'Detail' }, { value: 'cgstRate', display: 'Rate' }];
  pageSizes = [{ value: '10', display: '10' }, { value: '20', display: '20' }, { value: '50', display: '50' }];
   isDeleting:boolean= false;

  constructor(private cgstService: CgstService ,private router:Router) {
    this.cgstParams = new CgstParams();
   }

  ngOnInit(): void {
    this.loadCgstList();
  }

  loadCgstList() {
    this.cgstService.getAllCgst(this.cgstParams).subscribe(response => {
      // debugger;
      this.cgsts = response.result;
      this.pagination = response.pagination;
    })
  }
  resetFilters() {
    this.cgstParams = new CgstParams();
    this.loadCgstList();
  }

  addNewRecord() {
    console.log('adding new record');
    this.router.navigateByUrl('addcgst');
  }


  pageChanged(event: any) {
    //debugger;
    this.cgstParams.pageNumber = event.page;
    this.loadCgstList();
  }





  deleteCgst(cgstId:number) {
    const cgst = this.cgsts.find(x => x.cgstId ===cgstId);
    if (!cgst) return;
    this.isDeleting = true;
    this.cgstService.deleteCgst(cgstId)
        .pipe(first())
        .subscribe(() => this.cgsts = this.cgsts.filter(x => x.cgstId !== cgstId));
        // this.router.navigateByUrl('');
}
  gotoCgstDetails(url, id:number){
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













