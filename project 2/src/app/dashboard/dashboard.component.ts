import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroListService } from '../hero-list.service';
import { MessageListService } from '../message-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public tempHero: Hero[]=[];

  constructor(private herolis1:HeroListService) {
    
  }

  public getHero() {
    //let tempFirst: any;
    this.herolis1.getHeroes().subscribe(
      her=>this.tempHero=her.slice(1,7)
    );
    this.tempHero.sort((i,j)=>{return i.Id-j.Id});
  }

  ngOnInit(): void {
    this.getHero();
  }

}
