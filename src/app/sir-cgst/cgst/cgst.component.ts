import { Component, OnInit } from '@angular/core';
import { CgstService } from '../_services/cgst.service'
import { CgstModel } from '../_models/cgstmodel'

@Component({
  selector: 'app-cgst',
  templateUrl: './cgst.component.html',
  styleUrls: ['./cgst.component.css']
})
export class CgstComponent implements OnInit {

  cgsts: CgstModel[];
  constructor(private cgstService: CgstService) { }

  ngOnInit(): void {
    this.loadCgstList();
  }

  loadCgstList() {
    this.cgstService.getAllCgst().subscribe(cgstList => {
      debugger;
      this.cgsts = cgstList;
    })
  }
}
