import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarketingMessage } from 'src/app/shared/models/marketing-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() message: EventEmitter<MarketingMessage> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
