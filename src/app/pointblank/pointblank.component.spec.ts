/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointblankComponent } from './pointblank.component';

describe('PointblankComponent', () => {
  let component: PointblankComponent;
  let fixture: ComponentFixture<PointblankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointblankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
