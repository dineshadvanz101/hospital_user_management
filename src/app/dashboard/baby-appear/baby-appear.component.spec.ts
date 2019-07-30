import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyAppearComponent } from './baby-appear.component';

describe('BabyAppearComponent', () => {
  let component: BabyAppearComponent;
  let fixture: ComponentFixture<BabyAppearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyAppearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyAppearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
