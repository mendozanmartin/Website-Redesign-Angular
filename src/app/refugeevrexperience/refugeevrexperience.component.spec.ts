import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeevrexperienceComponent } from './refugeevrexperience.component';

describe('RefugeevrexperienceComponent', () => {
  let component: RefugeevrexperienceComponent;
  let fixture: ComponentFixture<RefugeevrexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugeevrexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeevrexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
