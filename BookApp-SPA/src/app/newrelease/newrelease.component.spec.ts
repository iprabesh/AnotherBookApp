/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewreleaseComponent } from './newrelease.component';

describe('NewreleaseComponent', () => {
  let component: NewreleaseComponent;
  let fixture: ComponentFixture<NewreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
