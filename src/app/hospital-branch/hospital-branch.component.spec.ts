import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBranchComponent } from './hospital-branch.component';

describe('HospitalBranchComponent', () => {
  let component: HospitalBranchComponent;
  let fixture: ComponentFixture<HospitalBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
