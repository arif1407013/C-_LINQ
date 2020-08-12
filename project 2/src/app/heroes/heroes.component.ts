import { MessageListService } from './../message-list.service';
import { HeroListService } from './../hero-list.service';
import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { HeroesDetailsComponent } from './../heroes-details/heroes-details.component'
import { HashLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public tempHero: Hero[]=[];
  
  public selectedHero: Hero;
  public tempSelectHero: string;
  public newHName: string;
  public newHId: number;
  private nerro: Hero;

  constructor(private herolis1:HeroListService, public messageListed: MessageListService) {
    this.herolis1.getHeroes().subscribe(
      her=>{
        this.tempHero=her;
        //console.log(this.tempHero)
        //her.sort((i,j)=>{return i.Id-j.Id});
        //console.log(her);
      });
  }

  /**
   * selectHero
   */
  public selectHero(i) {
    this.selectedHero = this.tempHero[i];
    this.messageListed.addMsg(`Selected Hero Id : ${this.selectedHero.Id}`);
  }

  /**
   * getHero
   */
  public getHero() {
    //this.tempHero.sort((i,j)=>{return i.Id-j.Id});
    //console.log(this.tempHero);
    return this.tempHero;
  }

  /**
   * showHero
   */
  public showHero() {
    if(this.newHId!=undefined && this.newHName!=undefined)
    {
      this.nerro = {Id: Number(this.newHId), Name: String(this.newHName)};
      if(this.nerro.Id != 0 && this.nerro.Name != "")
      {
        //console.log(this.nerro);
        this.herolis1.addHero(this.nerro);
      }
    }
    console.log(this.nerro);
    
    //this.router.navigate(['/heroes']);
    this.newHId=null;
    this.newHName="";
    window.location.reload();
    //console.log("print");
  }

  /**
   * delHero
   */
  public delHero(x: Hero) {
    let forDelH = this.tempHero.find(y=>y==x);
    //console.log(forDelH);
    this.herolis1.deleteHero(forDelH);
    this.getHero();
    //this.router.navigate(['heroes']);
    window.location.reload();
    //console.log("print");
  }

  ngOnInit(): void {
    this.getHero();
    //this.router.navigate(['/heroes']);
  }
}