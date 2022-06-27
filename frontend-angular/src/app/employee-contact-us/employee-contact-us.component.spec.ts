import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactUsComponent } from './employee-contact-us.component';

describe('EmployeeContactUsComponent', () => {
  let component: EmployeeContactUsComponent;
  let fixture: ComponentFixture<EmployeeContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
