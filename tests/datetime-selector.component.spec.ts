import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatetimeSelectorComponent } from '../src/app/new-message/shared/datetime-selector/datetime-selector.component';

describe('DatetimeSelectorComponent', () => {
  let component: DatetimeSelectorComponent;
  let fixture: ComponentFixture<DatetimeSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
