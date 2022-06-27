import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAboutUsFormComponent } from './employee-about-us-form.component';

describe('EmployeeAboutUsFormComponent', () => {
  let component: EmployeeAboutUsFormComponent;
  let fixture: ComponentFixture<EmployeeAboutUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAboutUsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAboutUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
