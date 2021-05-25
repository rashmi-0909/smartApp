import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{SharedserviceModel}from'../_models/sharedservicemodel';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
    editdata:SharedserviceModel;
  private flagSource = new BehaviorSubject(false);
  currentFlag = this.flagSource.asObservable();
  private idSource = new BehaviorSubject("0");
  currentId = this.idSource.asObservable();
  
  private objectSource = new BehaviorSubject({flag:false,id:""});
  currentObject = this.objectSource.asObservable();

 
  constructor() { }
      
  changeFlag(addflag: boolean) {
    this.flagSource.next(addflag);
    console.log('change flag called');
  }
  changeId(id: string) {
    this.idSource.next(id);
    console.log('change id called');
  }
  changeObject(ob:SharedserviceModel) {
       debugger;

    this.objectSource.next(ob);
    console.log('change object is called');
    console.log(ob.flag,ob.id);
  }



}
