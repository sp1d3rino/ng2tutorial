import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Tune } from 'app/tune';

@Component({
  selector: 'app-tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.css'],
  providers: [HeroService]
})
export class TunesListComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  title = 'Tour of Tunes';
  tunes: Tune[];
  selectedTune: Tune;

  getTunes(): void{
    this.heroService.getTunes().then(tunes => this.tunes = tunes);
    JSON.stringify(this.tunes,null);
  }


  onSelect(tune: Tune): void {
    this.selectedTune = tune;
  }

  
  ngOnInit() {

    this.getTunes();
  }

}
