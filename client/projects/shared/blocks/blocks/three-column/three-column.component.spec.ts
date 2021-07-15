import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnComponent } from './three-column.component';

describe('ThreeColumnBlockComponent', () => {
  let component: ThreeColumnComponent;
  let fixture: ComponentFixture<ThreeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
