import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Tune } from './tune';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
  private tunesUrl = 'http://localhost:8080/api/tunes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]>  {
    return Promise.resolve(HEROES);

  } // stub

  getTunes():Promise<Tune[]>{
    console.log("Called getTunes");

    return this.http.get(this.tunesUrl)
    .toPromise()
    .then(response => response.json() as Tune[])
    .catch((res: Response) => this.handleError(res));


  }
  getTune(id: string): Promise<Tune> {
    const url = `${this.tunesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Tune)
    .catch(this.handleError);
  }


  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
