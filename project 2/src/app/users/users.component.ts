import { element } from 'protractor';
import { UserListService } from './../user-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _Id:number=1;
  public _Valued;
  public _Tempo;
  /*private _Name:string;
  private _City:string;
  private _Company:string;
  private _Email:string;*/
  private _Listed:any=[];

  constructor(listed: UserListService) {
    listed.setData().then(element1=>{this._Listed=element1;});
    //console.log(this._Listed);
  }

  /**
   * getId
   */
  public getId(i):void {
    if(i==0)
    {
      this._Id++;
      if(this._Id>9)
      {
        this._Id=0;
      }
    }
    else
    {
      this._Id--;
      if(this._Id<0)
      {
        this._Id=9;
      }
    }
  }

  /**
   * getName
   */
  public getName():string {
    return this._Listed[this._Id].name;
  }

  /**
   * getCity
   */
  public getCity():string {
    return this._Listed[this._Id].address.city;
  }

  /**
   * getCompany
   */
  public getCompany():string {
    return this._Listed[this._Id].company.name;
  }

  /**
   * getList
   */
  public getList() {
    return this._Listed;
  }

  /**
   * changer
   */
  public changer() {
    this._Tempo=this._Valued;
  }

  ngOnInit(): void {
  }

}
//let tep46 = new UsersComponent(new UserListService());
//function getting()
//{
 // let temp1 = new UsersComponent();
//  console.log(temp1.getList());
//}