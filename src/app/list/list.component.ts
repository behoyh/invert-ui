import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { MarketingMessage } from '../shared/models/marketing-message';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: MessagesService, private router: Router) { }

  marketingObject: MarketingMessage[];

  ngOnInit() {
    this.service.GetAllMessages().subscribe(x => { this.marketingObject = x; });
  }

  public DeleteMessage(message:MarketingMessage) {
    message.active = false;
    this.service.AddOrUpdateMessage(message).subscribe(x=>{alert("deleted " + message.id); this.ngOnInit()});
  }
}
