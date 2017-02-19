import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Tune } from './tune';
import { TuneDetail } from './tune_detail';
import { Headers, Http, Response,RequestOptions  } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
  private tunesUrl = 'http://localhost:8080/api/tunes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]>  {
    return Promise.resolve(HEROES);

  } // stub

  getTunes():Observable<Tune[]>{
    console.log("Called getTunes");

    return this.http.get(this.tunesUrl)
    .map(this.extractData);


  }

  getTune (id: string): Observable<TuneDetail> {
    const url = `${this.tunesUrl}/${id}`;
    return this.http.get(url)
    .map(this.extractData);
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



  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }



}
