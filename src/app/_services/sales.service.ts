import { Injectable } from '@angular/core';
import { Serviceresponsesalepurchase } from '../_models/serviceresponsemodelsale';
import{salepurchaseReportDetailModel}from '../_models/salepurchasedetails';
import{SalePurchaseInput}from '../_models/salepurchaseinput';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import{SaleCompanyModel}from '../_models/salecompanymodel';

import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class SalesService {
  baseUrl = environment.apiURL;
  salePurchaseDetails:salepurchaseReportDetailModel[];
 
  constructor(private http: HttpClient) { }



GetSaleReport_company(ob:SalePurchaseInput)
 {
 
  const accountbody = 
   { compCode:ob.compCode,
     accYear:ob.accYear,
     startDate:ob.startDate,
     finishDate:ob.finishDate,
     saleOrPurchaseType:ob.saleOrPurchaseType
 
    
   };

  return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
    map((response:Serviceresponsesalepurchase ) => {
        debugger;
        // this.ledgerdata=JSON.parse(JSON.stringify(response.data.company));
     
      
        return JSON.parse(JSON.stringify(response.data.company));
       
     
      
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );
}


  getSaleRport(ob:SalePurchaseInput):Observable<salepurchaseReportDetailModel[]>
  {
  
   const accountbody = 
   { compCode:ob.compCode,
     accYear:ob.accYear,
     startDate:ob.startDate,
     finishDate:ob.finishDate,
     saleOrPurchaseType:ob.saleOrPurchaseType
 
    
   };
 
   return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
     map((response:Serviceresponsesalepurchase ) => {
     
      this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.salePurchaseDetails));
      
       return JSON.parse(JSON.stringify(response.data.salePurchaseDetails));
      
       
     }, error => {
       console.log(error)
       return throwError('Unable to get the Value ')
     })
   );
 }
 


 getSaleTotal(ob:SalePurchaseInput)
 {
 
  const accountbody = 
  { compCode:ob.compCode,
    accYear:ob.accYear,
    startDate:ob.startDate,
    finishDate:ob.finishDate,
    saleOrPurchaseType:ob.saleOrPurchaseType

   
  };

  return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
    map((response:Serviceresponsesalepurchase ) => {
        debugger;
     this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.salePurchaseDetailsTotal));
     
      return JSON.parse(JSON.stringify(response.data.salePurchaseDetailsTotal));
     
      
    }, error => {
      console.log(error)
      return throwError('Unable to get the Value ')
    })
  );
}

 


getAccountHeadSummary(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.accountHeadSummary));
    
     return JSON.parse(JSON.stringify(response.data.accountHeadSummary));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}



getAccountHeadSummaryTotal(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.accountHeadSummaryTotal));
    
     return JSON.parse(JSON.stringify(response.data.accountHeadSummaryTotal));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}
getCgstHeadSummary(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.cgstHeadSummary));
    
     return JSON.parse(JSON.stringify(response.data.cgstHeadSummary));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}


getCgstHeadSummaryTotal(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.cgstHeadSummaryTotal));
    
     return JSON.parse(JSON.stringify(response.data.cgstHeadSummaryTotal));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}

getSgstHeadSummary(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.sgstHeadSummary));
    
     return JSON.parse(JSON.stringify(response.data.sgstHeadSummary));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}




getSgstHeadSummaryTotal(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.sgstHeadSummaryTotal));
    
     return JSON.parse(JSON.stringify(response.data.sgstHeadSummaryTotal));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}




getIgstHeadSummary(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.igstHeadSummary));
    
     return JSON.parse(JSON.stringify(response.data.igstHeadSummary));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}




getIgstHeadSummaryTotal(ob:SalePurchaseInput)
{

 const accountbody = 
 { compCode:ob.compCode,
   accYear:ob.accYear,
   startDate:ob.startDate,
   finishDate:ob.finishDate,
   saleOrPurchaseType:ob.saleOrPurchaseType

  
 };

 return this.http.post(this.baseUrl+'/Ledger/SaleOrPurchaseRegister',accountbody).pipe(
   map((response:Serviceresponsesalepurchase ) => {
       debugger;
    this.salePurchaseDetails=JSON.parse(JSON.stringify(response.data.igstHeadSummaryTotal));
    
     return JSON.parse(JSON.stringify(response.data.igstHeadSummaryTotal));
    
     
   }, error => {
     console.log(error)
     return throwError('Unable to get the Value ')
   })
 );
}



























}
