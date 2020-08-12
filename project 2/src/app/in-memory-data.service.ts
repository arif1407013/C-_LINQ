import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroesDet: Hero[] = [
      /*{ Id: 12, Name: 'Narco' },
      //{ Id: 20, Name: 'Tornado' },
     // { Id: 13, Name: 'Bombasto' },
      { Id: 16, Name: 'RubberMan' },
      { Id: 14, Name: 'Celeritas' },
      //{ Id: 15, Name: 'Magneta' },
      //{ Id: 17, Name: 'Dynama' },
      { Id: 10, Name: 'Windstorm'},
      { Id: 18, Name: 'Dr IQ' },
      { Id: 19, Name: 'Magma' },
      //{ Id: 21, Name: 'Tilaman'},
      { Id: 11, Name: 'Dr Nice' }*/
    ];
    //console.log(heroesDet);
    heroesDet.sort((i,j)=>i.Id-j.Id);
    return {heroesDet};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.Id)) + 1 : 13;
  }
}
