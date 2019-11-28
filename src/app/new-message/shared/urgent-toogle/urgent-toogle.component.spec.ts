import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentToogleComponent } from './urgent-toogle.component';

describe('UrgentToogleComponent', () => {
  let component: UrgentToogleComponent;
  let fixture: ComponentFixture<UrgentToogleComponent>;

  beforeEach(async(() => {
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
