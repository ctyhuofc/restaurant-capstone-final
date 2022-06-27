import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactInfoComponent } from './employee-contact-info.component';

describe('EmployeeContactInfoComponent', () => {
  let component: EmployeeContactInfoComponent;
  let fixture: ComponentFixture<EmployeeContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
