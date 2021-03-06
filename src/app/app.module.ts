import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import { AppRoutingModule }     from './app-routing.module';
import { TunesListComponent } from './tunes-list/tunes-list.component';
import { TuneDetailComponent } from './tune-detail/tune-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './user/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesListComponent,
    TunesListComponent,
    TuneDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()

  ],
  providers: [HeroService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
