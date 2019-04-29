import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshoesPage } from './allshoes.page';

describe('AllshoesPage', () => {
  let component: AllshoesPage;
  let fixture: ComponentFixture<AllshoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllshoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllshoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
