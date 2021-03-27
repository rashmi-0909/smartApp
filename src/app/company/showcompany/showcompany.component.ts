import { Component, OnInit } from '@angular/core';

import { CompanyService } from 'src/app/_services/company.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { CompanyModel } from '../../_models/companymodel'

@Component({
  selector: 'app-showcompany',
  templateUrl: './showcompany.component.html',
  styleUrls: ['./showcompany.component.css']
})

export class ShowcompanyComponent implements OnInit {
  companies: CompanyModel[];
  isDeleting:boolean= false;
  compCode:CompanyModel;
  constructor(private companyService: CompanyService ,private router:Router) { }

  ngOnInit(): void {
    this.loadCompanyList();
  }

  loadCompanyList() {
    this.companyService.getAllCompany().subscribe(companyList => {
   
      this.companies = companyList;
    })
  }
  deleteCompany(compCode:string) {
    const company = this.companies.find(x => x.compCode ===compCode);
    if (!company) return;
    this.isDeleting = true;
    this.companyService.deleteCompany(compCode)
        .pipe(first())
        .subscribe(() => this.companies = this.companies.filter(x => x.compCode !== compCode));
        // this.router.navigateByUrl('');
}
  gotoCompanyDetails(url, id:string){
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













