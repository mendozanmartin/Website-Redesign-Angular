import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinovacuumComponent } from './arduinovacuum.component';

describe('ArduinovacuumComponent', () => {
  let component: ArduinovacuumComponent;
  let fixture: ComponentFixture<ArduinovacuumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinovacuumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinovacuumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
