import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdminInfoComponent } from './hospital-admin-info.component';

describe('HospitalAdminInfoComponent', () => {
  let component: HospitalAdminInfoComponent;
  let fixture: ComponentFixture<HospitalAdminInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAdminInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
