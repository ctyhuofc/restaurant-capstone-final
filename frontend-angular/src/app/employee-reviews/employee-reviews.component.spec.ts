import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReviewsComponent } from './employee-reviews.component';

describe('EmployeeReviewsComponent', () => {
  let component: EmployeeReviewsComponent;
  let fixture: ComponentFixture<EmployeeReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
