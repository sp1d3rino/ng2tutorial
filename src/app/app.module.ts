import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import { AppRoutingModule }     from './app-routing.module';
import { TunesListComponent } from './tunes-list/tunes-list.component';
import { TuneDetailComponent } from './tune-detail/tune-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesListComponent,
    TunesListComponent,
    TuneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
