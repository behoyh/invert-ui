import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeSelectorComponent } from '../src/app/new-message/shared/type-selector/type-selector.component';

describe('TypeSelectorComponent', () => {
  let component: TypeSelectorComponent;
  let fixture: ComponentFixture<TypeSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
