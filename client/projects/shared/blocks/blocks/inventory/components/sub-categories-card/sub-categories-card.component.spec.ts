import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesCardComponent } from './sub-categories-card.component';

describe('SubCategoriesCardComponent', () => {
  let component: SubCategoriesCardComponent;
  let fixture: ComponentFixture<SubCategoriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
