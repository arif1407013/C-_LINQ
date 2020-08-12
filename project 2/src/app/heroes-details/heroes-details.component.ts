import { HeroListService } from './../hero-list.service';
import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroList: HeroListService
  ) { }

  @Input() selectedHeroD: Hero;
  public tempSelectHeroD: string;
  //public mataInp;

  /**
   * assigner
   */
  public assigner() {
    this.selectedHeroD.Name = this.tempSelectHeroD;
    //console.log(this.mataInp);
  }

  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.heroList.getHero(id).subscribe(hero => {this.selectedHeroD = hero;});
  }

  /**
   * goBack
   */
  public goBack() {
    this.location.back();
  }

  /**
   * saveHero
   */
  public saveHero() {
    //this.heroList.updateHero(this.selectedHeroD).subscribe(()=>this.goBack());
  }

  /**
   * deleteHero
   */
  public deleteHero() {
    this.heroList.deleteHero(this.selectedHeroD);
    this.goBack();
  }

  ngOnInit(): void {
    this.getHero();
  }

}

//export class FormFieldAppearanceExample {}
