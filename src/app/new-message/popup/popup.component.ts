import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarketingMessage } from 'src/app/shared/models/marketing-message';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() message: EventEmitter<MarketingMessage> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
