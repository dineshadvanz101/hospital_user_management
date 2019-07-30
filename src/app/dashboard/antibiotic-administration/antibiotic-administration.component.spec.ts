import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibioticAdministrationComponent } from './antibiotic-administration.component';

describe('AntibioticAdministrationComponent', () => {
  let component: AntibioticAdministrationComponent;
  let fixture: ComponentFixture<AntibioticAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntibioticAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntibioticAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
