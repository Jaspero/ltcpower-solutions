import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project.ComponentComponent } from './project.component';

describe('Project.ComponentComponent', () => {
  let component: Project.ComponentComponent;
  let fixture: ComponentFixture<Project.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
