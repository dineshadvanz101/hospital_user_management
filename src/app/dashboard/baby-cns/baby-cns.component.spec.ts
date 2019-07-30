import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyCnsComponent } from './baby-cns.component';

describe('BabyCnsComponent', () => {
  let component: BabyCnsComponent;
  let fixture: ComponentFixture<BabyCnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyCnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyCnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
