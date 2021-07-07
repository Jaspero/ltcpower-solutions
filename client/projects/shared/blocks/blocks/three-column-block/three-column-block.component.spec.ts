import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnBlockComponent } from './three-column-block.component';

describe('ThreeColumnBlockComponent', () => {
  let component: ThreeColumnBlockComponent;
  let fixture: ComponentFixture<ThreeColumnBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeColumnBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
