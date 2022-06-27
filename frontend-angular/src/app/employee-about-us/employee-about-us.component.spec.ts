import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAboutUsComponent } from './employee-about-us.component';

describe('EmployeeAboutUsComponent', () => {
  let component: EmployeeAboutUsComponent;
  let fixture: ComponentFixture<EmployeeAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
