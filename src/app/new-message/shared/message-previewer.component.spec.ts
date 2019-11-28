import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePreviewerComponent } from './message-previewer.component';

describe('MessagePreviewerComponent', () => {
  let component: MessagePreviewerComponent;
  let fixture: ComponentFixture<MessagePreviewerComponent>;

  beforeEach(async(() => {
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
