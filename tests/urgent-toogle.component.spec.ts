import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UrgentToogleComponent } from '../src/app/new-message/shared/urgent-toogle/urgent-toogle.component';

describe('UrgentToogleComponent', () => {
  let component: UrgentToogleComponent;
  let fixture: ComponentFixture<UrgentToogleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentToogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
