import { Component, OnInit,Input } from '@angular/core';
import { TuneDetail } from '../tune_detail';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-tune-detail',
  templateUrl: './tune-detail.component.html',
  styleUrls: ['./tune-detail.component.css']
})
export class TuneDetailComponent implements OnInit {
  errorMessage: string;

  @Input()
  tune: TuneDetail;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  getTuneDetail()
  {
      this.route.params
      .switchMap((params: Params) => this.heroService.getTune(params['id']))
      .subscribe(
        tune => this.tune = tune,
        error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getTuneDetail();
  }




  goBack(): void {
    this.location.back();
  }
}
