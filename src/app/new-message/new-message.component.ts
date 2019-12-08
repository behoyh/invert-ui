import { Component, OnInit } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  message: MarketingMessage;

  constructor() { }

  ngOnInit() {
  }

}
