import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarketingMessage } from 'src/app/shared/models/marketing-message';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  @Output() message: EventEmitter<MarketingMessage> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
