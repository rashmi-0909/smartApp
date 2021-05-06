import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    editId:number;
  constructor() { }
      setId(data:number){
           this.editId=data;
      }
      getId(){
        return this.editId;
   }

}
