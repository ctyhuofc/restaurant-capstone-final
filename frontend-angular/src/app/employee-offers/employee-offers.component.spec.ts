import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOffersComponent } from './employee-offers.component';

describe('EmployeeOffersComponent', () => {
  let component: EmployeeOffersComponent;
  let fixture: ComponentFixture<EmployeeOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
