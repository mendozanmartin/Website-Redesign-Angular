import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackstonesComponent } from './jackstones.component';

describe('JackstonesComponent', () => {
  let component: JackstonesComponent;
  let fixture: ComponentFixture<JackstonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackstonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
