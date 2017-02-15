/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolishedComponent } from './polished.component';

describe('PolishedComponent', () => {
  let component: PolishedComponent;
  let fixture: ComponentFixture<PolishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
