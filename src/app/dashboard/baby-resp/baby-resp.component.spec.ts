import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyRespComponent } from './baby-resp.component';

describe('BabyRespComponent', () => {
  let component: BabyRespComponent;
  let fixture: ComponentFixture<BabyRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
