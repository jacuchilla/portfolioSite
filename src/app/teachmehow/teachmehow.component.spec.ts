/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeachmehowComponent } from './teachmehow.component';

describe('TeachmehowComponent', () => {
  let component: TeachmehowComponent;
  let fixture: ComponentFixture<TeachmehowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachmehowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachmehowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
