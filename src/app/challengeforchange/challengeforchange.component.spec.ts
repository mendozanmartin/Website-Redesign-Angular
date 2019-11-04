import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeforchangeComponent } from './challengeforchange.component';

describe('ChallengeforchangeComponent', () => {
  let component: ChallengeforchangeComponent;
  let fixture: ComponentFixture<ChallengeforchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeforchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeforchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
