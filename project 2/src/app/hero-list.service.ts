import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageListService } from './message-list.service';
import { Hero } from './hero';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class HeroListService {

  //private HeroList: Hero[];
  private HeroList1: Hero[] = [];
  private HeroList2;
  private HeroList3: Hero[] = [];

  httpdOpt = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private msges: MessageListService, private httpd: HttpClient,private firedDS: AngularFireDatabase) {
    //this.httpd.get<Hero[]>(this.heroUrl).subscribe(i=>{this.HeroList=i;});
    //this.firedDS.list<Hero>('/Heroes').valueChanges().subscribe(i=>{this.HeroList=i;});
    //console.log(this.FireData);
    this.firedDS.list<Hero>('/Heroes').snapshotChanges().subscribe(async i=>{
        this.HeroList2 = i;
        //console.log(this.HeroList2);
        //this.HeroList3 = [];cd
        this.HeroList2.forEach(element => {
        let tempHero1: Hero = {Id: null, Name: null, Key: null};
        tempHero1.Id = element.payload.node_.children_.root_.left.value.value_;
        tempHero1.Name = element.payload.node_.children_.root_.value.value_;
        tempHero1.Key = element.key;
        //console.log(tempHero1);
        this.HeroList3.push(tempHero1);
      });
      //const tempHeroList = this.HeroList3;
      //this.HeroList3 = [];
      this.HeroList3.sort((i,j)=>i.Id-j.Id);
      //console.log(this.HeroList3);
      //console.log(tempHeroList);
    });
    /*firebase.database().ref('/Heroes').on('value', snaphot => {
      //console.log(snaphot);
      snaphot.forEach(i=>{
        let tempHero1: Hero = {Id: null, Name: null, Key: null};
        tempHero1.Name = (i.node_.children_.root_.value.value_);
        tempHero1.Key = (i.key);
        tempHero1.Id = (i.node_.children_.root_.left.value.value_);
        this.HeroList1.push(tempHero1);
      })
      //console.log(this.HeroList1);
      //console.log(this.HeroList3);
    });*/

    //(this.FireData.on('value', (x)=>{console.log(x.val())}));
    //var tempItem: Hero = {Id: 22, Name: 'Hanabi'};
    //this.firedDS.list('/Heroes').push(tempItem);
    //this.firedDS.list<Hero>(`/Heroes/${10}`).valueChanges().subscribe(i=>{console.log(i);});
  }

  heroUrl = 'api/heroesDet';

  /*private HeroList: Hero[]=[
    { Id: 10, Name: 'Windstorm'},
    { Id: 11, Name: 'Dr Nice' },
    { Id: 12, Name: 'Narco' },
    { Id: 13, Name: 'Bombasto' },
    { Id: 14, Name: 'Celeritas' },
    { Id: 15, Name: 'Magneta' },
    { Id: 16, Name: 'RubberMan' },
    { Id: 17, Name: 'Dynama' },
    { Id: 18, Name: 'Dr IQ' },
    { Id: 19, Name: 'Magma' },
    { Id: 20, Name: 'Tornado' },
    { Id: 21, Name: 'Tilaman'}
  ];*/

  private log(message: string) {
    this.msges.addMsg(`hero service: ${message}`);
  }

  /**
   * getHeroes
   */
  public getHeroes(): Observable<Hero[]> {
    //(this.httpd.get<Hero[]>(this.heroUrl).subscribe(her=>console.log(her)));
    //let tempList = 
    //console.log(this.httpd.get<Hero[]>(this.heroUrl)+"kujnk");
    //return this.httpd.get<Hero[]>(this.heroUrl).pipe(catchError(this.handleError<Hero[]>('this.getHeroes()', [])));
    //return of (this.HeroList);
    //this.HeroList1 = this.firedDS.list<Hero>('/Heroes');
    //return this.HeroList1.valueChanges();
    //console.log(this.HeroList3);
    return of (this.HeroList3);
  }

  /**
   * getHero
   */
  public getHero(id: number): Observable<Hero>{
    //this.msges.addMsg(`fetched hero with id ${id}`);
    //const url = `${this.heroUrl}/${id}`;
    //console.log(url);
    //var heroList1;
    this.log(`fetched hero with id ${id}`);
    //this.httpd.get<Hero>(url).subscribe(i=>console.log(i));
    //console.log(this.HeroList);
    let heroo: Hero;
    heroo = this.HeroList3.find(x=>x.Id==id);
    //console.log(this.HeroList1[0].Id);
    //console.log(heroo);
    return of (heroo);
    //return this.httpd.get<Hero>(url);/*.pipe(catchError(this.handleError<Hero>(`getHero id=${id}`)))*/
  }

  /**
   * updateHero
   */
  /*public updateHero(hero: Hero): Observable<any> {
    return this.httpd.put(this.heroUrl, hero, this.httpdOpt);
  }*/

  /**
   * addHero
   */
  public addHero(tempHero: Hero): void {
    this.firedDS.list('/Heroes').push(tempHero);
    //this.firedDS.list<Hero>('/Heroes').valueChanges().subscribe(i=>{console.log(i);});
    //console.log();
    this.HeroList3 = [];
    //console.log(this.HeroList3);
    //return true;
  }

  /**
   * deleteHero
   */
  public deleteHero(x: Hero): void {
    //this.firedDS.list('/Heroes').remove(x);
    //let temp3 ;
    //console.log(temp3);
    let tempKey = null;
    tempKey = x.Key;
    this.firedDS.list(`/Heroes/${tempKey}`).remove();
    //console.log(this.HeroList3);
    this.HeroList3 = [];
    //return true;
  }

  /**
   * handleError
   */
  private handleError<T>(operation='operation', result?:T) {
    return (error:any): Observable<T> =>{
      this.log(`${operation} failed: failing message ${error.message}`)
      return of (result as T);
    }
  }
}