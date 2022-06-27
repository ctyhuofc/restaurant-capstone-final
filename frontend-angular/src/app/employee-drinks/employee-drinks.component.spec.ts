import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDrinksComponent } from './employee-drinks.component';

describe('EmployeeDrinksComponent', () => {
  let component: EmployeeDrinksComponent;
  let fixture: ComponentFixture<EmployeeDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
