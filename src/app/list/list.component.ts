import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MarketingObject } from '../shared/models/marketing-object';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: MessagesService) { }

  marketingObject:MarketingMessage[];

  ngOnInit() {
    this.service.GetAllMessages().subscribe(x=> {debugger; this.marketingObject = x;});
  }

}
