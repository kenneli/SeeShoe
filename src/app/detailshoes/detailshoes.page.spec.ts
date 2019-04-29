import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshoesPage } from './detailshoes.page';

describe('DetailshoesPage', () => {
  let component: DetailshoesPage;
  let fixture: ComponentFixture<DetailshoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailshoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailshoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
