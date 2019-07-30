import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyCvComponent } from './baby-cv.component';

describe('BabyCvComponent', () => {
  let component: BabyCvComponent;
  let fixture: ComponentFixture<BabyCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
