/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TunesListComponent } from './tunes-list.component';

describe('TunesListComponent', () => {
  let component: TunesListComponent;
  let fixture: ComponentFixture<TunesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
