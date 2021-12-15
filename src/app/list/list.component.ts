import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { MarketingMessage } from '../shared/models/marketing-message';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: MessagesService) { }

  currentMessages: MarketingMessage[];
  upcomingMessages: MarketingMessage[];
  pastMessages: MarketingMessage[];

  ngOnInit() {
    this.service.GetAllMessages().subscribe(x => { 
      this.currentMessages = x.filter(y=>moment(y.startDate) <= moment() && moment(y.endDate) > moment());
      this.upcomingMessages = x.filter(y=>moment(y.startDate) > moment()); 
      this.pastMessages = x.filter(y=>moment(y.endDate) < moment()); 
    });
  }

  public DeleteMessage(message:MarketingMessage) {
    message.active = false;
    this.service.AddOrUpdateMessage(message).subscribe(x=>{alert("deleted " + message.id); this.ngOnInit()});
  }
}
