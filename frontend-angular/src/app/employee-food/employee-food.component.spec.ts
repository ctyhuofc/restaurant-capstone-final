import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFoodComponent } from './employee-food.component';

describe('EmployeeFoodComponent', () => {
  let component: EmployeeFoodComponent;
  let fixture: ComponentFixture<EmployeeFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
