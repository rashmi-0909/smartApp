import { Component, OnInit } from '@angular/core';
import { CgstModel } from '../../_models/cgstmodel'
import { CgstService } from '../../_services/cgst.service'

@Component({
  selector: 'app-cgst-list',
  templateUrl: './cgst-list.component.html',
  styleUrls: ['./cgst-list.component.css']
})
export class CgstListComponent implements OnInit {

  cgsts: CgstModel[];

  constructor(private cgstService: CgstService) { }

  ngOnInit(): void {
    this.loadCgstList();
  }

  loadCgstList() {
    this.cgstService.getAllCgst().subscribe(cgstList => {
      debugger;
      //this.cgsts = cgstList;
    })
  }


}
