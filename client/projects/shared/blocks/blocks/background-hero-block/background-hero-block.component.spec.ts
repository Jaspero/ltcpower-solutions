import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundHeroBlockComponent } from './background-hero-block.component';

describe('BackgroundHeroBlockComponent', () => {
  let component: BackgroundHeroBlockComponent;
  let fixture: ComponentFixture<BackgroundHeroBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundHeroBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundHeroBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
