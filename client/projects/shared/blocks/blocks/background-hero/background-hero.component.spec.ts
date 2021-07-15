import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundHeroComponent } from './background-hero.component';

describe('BackgroundHeroBlockComponent', () => {
  let component: BackgroundHeroComponent;
  let fixture: ComponentFixture<BackgroundHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
