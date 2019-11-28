import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetUploaderComponent } from './target-uploader.component';

describe('TargetUploaderComponent', () => {
  let component: TargetUploaderComponent;
  let fixture: ComponentFixture<TargetUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
