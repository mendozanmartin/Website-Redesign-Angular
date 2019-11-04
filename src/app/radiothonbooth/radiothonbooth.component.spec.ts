import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiothonboothComponent } from './radiothonbooth.component';

describe('RadiothonboothComponent', () => {
  let component: RadiothonboothComponent;
  let fixture: ComponentFixture<RadiothonboothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiothonboothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiothonboothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
