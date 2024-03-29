import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TargetUploaderComponent } from '../src/app/new-message/shared/target-uploader/target-uploader.component';

describe('TargetUploaderComponent', () => {
  let component: TargetUploaderComponent;
  let fixture: ComponentFixture<TargetUploaderComponent>;

  beforeEach(waitForAsync(() => {
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
