import { Component, OnInit } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  message: MarketingMessage;

  constructor(private service: MessagesService) { }

  ngOnInit() { }

  updateMessage() {
    debugger;
    this.service.AddOrUpdateMessage(this.message);
  }

  onActivate(componentReference) {
    componentReference.netResult.subscribe((data) => {
       this.patchMessage(data);
    })
 }

  patchMessage(patch: any)
  {
    this.message = {
      ...this.message,
      ...patch
    };
  }
}
