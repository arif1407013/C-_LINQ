import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  public _Data;
  constructor()
  {
    //let newTemp = new UserListService();
    //newTemp.setData();
  }
  /**
   * getData*/
   
  async setData() {
    let receiver1 = (await fetch('https://jsonplaceholder.typicode.com/users',{method:'get'})).json();
    await receiver1.then(element=>{
      this._Data=element;
    });
    //console.log(this._Data);
    return this._Data;
  }
}
//let tep12 = new UserListService();
//console.log(tep12.setData());
//console.log(tep12._email);