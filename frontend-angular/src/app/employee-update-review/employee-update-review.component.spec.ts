import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateReviewComponent } from './employee-update-review.component';

describe('EmployeeUpdateReviewComponent', () => {
  let component: EmployeeUpdateReviewComponent;
  let fixture: ComponentFixture<EmployeeUpdateReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
