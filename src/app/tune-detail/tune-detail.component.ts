import { Component, OnInit,Input } from '@angular/core';
import { Tune } from '../tune';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-tune-detail',
  templateUrl: './tune-detail.component.html',
  styleUrls: ['./tune-detail.component.css']
})
export class TuneDetailComponent implements OnInit {
  @Input()
  tune: Tune;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.params
    .switchMap((params: Params) => this.heroService.getTune(params['id']))
    .subscribe(tune => this.tune = tune);
  }


  goBack(): void {
    this.location.back();
  }
}
