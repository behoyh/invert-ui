import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessagePreviewerComponent } from '../src/app/new-message/shared/message-previewer.component';

describe('MessagePreviewerComponent', () => {
  let component: MessagePreviewerComponent;
  let fixture: ComponentFixture<MessagePreviewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
