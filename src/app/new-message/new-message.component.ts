import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MessagesService } from '../messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent implements OnInit {
  @Select(state => state.app.type) type$: Observable<string>;

  showSubmit:boolean;

  form: FormGroup;

  get urgent(): AbstractControl {
    return this.form.controls.urgent;
  }
  get istargeted(): AbstractControl {
    return this.form.controls.istargeted;
  }
  get title(): AbstractControl {
    return this.form.controls.title;
  }
  get body(): AbstractControl {
    return this.form.controls.body;
  }
  get link(): AbstractControl {
    return this.form.controls.link;
  }
  get image(): AbstractControl {
    return this.form.controls.image;
  }
  get startdate(): AbstractControl {
    return this.form.controls.image;
  }
  get enddate(): AbstractControl {
    return this.form.controls.image;
  }

  constructor(private service: MessagesService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [0, Validators.required],
      type: ['', Validators.required],
      active: [true, Validators.required],
      urgent: [false, Validators.required],
      istargeted: [false, Validators.required],
      title: ['', Validators.required],
      body: [''],
      link: [''],
      image: [''],
      startdate: [new Date(), Validators.required],
      enddate: [new Date(), Validators.required],
      created: [new Date(), Validators.required],
      modified: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {

    const firstRoute = this.route.snapshot.firstChild;

    if (!firstRoute || firstRoute.url[0].path == "new") return;

    var id = this.route.snapshot.firstChild.url[1];

    if (id && id.path) {
      this.service.GetMessage(id.path).subscribe(x => { this.form.setValue(x); });
    }
    
    this.service.Route(firstRoute.url[0].path, id ? id.path : "");

    this.type$.subscribe(x => {
      if(x) this.showSubmit = true;
      this.form.patchValue({ 'type': x });
    });
  }

  updateMessage() {
    this.service.AddOrUpdateMessage(new MarketingMessage(this.form.value));
  }
}
