import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonComponent implements OnInit {
  @Output() submit = new EventEmitter();
  
  addOrUpdate = "Add";

  constructor() { }

  ngOnInit() {
  }

  submitClicked()
  {
    this.submit.emit(true);
  }

}
