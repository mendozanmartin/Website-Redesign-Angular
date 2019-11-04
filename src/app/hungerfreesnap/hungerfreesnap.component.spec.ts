import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerfreesnapComponent } from './hungerfreesnap.component';

describe('HungerfreesnapComponent', () => {
  let component: HungerfreesnapComponent;
  let fixture: ComponentFixture<HungerfreesnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HungerfreesnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HungerfreesnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
