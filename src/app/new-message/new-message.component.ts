import { Component, OnInit } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MessagesService } from '../messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  new = true;
  message: MarketingMessage = new MarketingMessage();

  form: FormGroup = this.fb.group(this.message);

  constructor(private service: MessagesService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    const firstRoute = this.route.snapshot.firstChild.url[0].path;
    if (firstRoute == "new") {
      this.new = false;
    }
    else {
      this.service.Route(firstRoute);
      this.service.GetMessage(this.route.snapshot.paramMap.get('id')).subscribe(x => this.message = x);
    }
  }

  updateMessage() {
    this.service.AddOrUpdateMessage(this.message);
  }

  patchMessage(patch: any) {
    this.message = {
      ...this.message,
      ...patch
    };
  }
}
