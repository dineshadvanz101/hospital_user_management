import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyGitComponent } from './baby-git.component';

describe('BabyGitComponent', () => {
  let component: BabyGitComponent;
  let fixture: ComponentFixture<BabyGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
