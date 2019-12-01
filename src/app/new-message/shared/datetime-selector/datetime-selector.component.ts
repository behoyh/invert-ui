import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime-selector',
  templateUrl: './datetime-selector.component.html',
  styleUrls: ['./datetime-selector.component.scss']
})
export class DatetimeSelectorComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
 
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
  }

}
