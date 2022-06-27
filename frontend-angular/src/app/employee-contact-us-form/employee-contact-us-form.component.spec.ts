import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactUsFormComponent } from './employee-contact-us-form.component';

describe('EmployeeContactUsFormComponent', () => {
  let component: EmployeeContactUsFormComponent;
  let fixture: ComponentFixture<EmployeeContactUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeContactUsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
