import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyInvestigationComponent } from './baby-investigation.component';

describe('BabyInvestigationComponent', () => {
  let component: BabyInvestigationComponent;
  let fixture: ComponentFixture<BabyInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
