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
    if (!this.route.snapshot.firstChild) return;
    const firstRoute = this.route.snapshot.firstChild.url[0].path;
    if (firstRoute == "new") {
      this.new = false;
    }
    else {
      this.service.Route(firstRoute);
      var id = this.route.snapshot.firstChild.url[1].path;
      if (id) {
        this.service.GetMessage(id).subscribe(x => {debugger; this.message = x;});
      }
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
    debugger;
  }
}
