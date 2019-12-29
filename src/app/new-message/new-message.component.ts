import { Component, OnInit } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Select(state => state.app.type) type$: Observable<string>;

  showSubmit: boolean;

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
    return this.form.controls.startdate;
  }
  get enddate(): AbstractControl {
    return this.form.controls.enddate;
  }
  get starttime(): AbstractControl {
    return this.form.controls.starttime;
  }
  get endtime(): AbstractControl {
    return this.form.controls.endtime;
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
      starttime: [new Date()],
      endtime: [new Date()],
      created: [moment(), Validators.required],
      modified: [moment(), Validators.required]
    });
  }

  ngOnInit(): void {

    this.type$.subscribe(x => {
      if (x) {
        this.showSubmit = true;
      }
      this.form.patchValue({ 'type': x });
    });

    const firstRoute = this.route.snapshot.firstChild;

    if (!firstRoute || firstRoute.url[0].path == "new") return;

    if (firstRoute.url[1] && firstRoute.url[1].path) {
      this.service.GetMessage(firstRoute.url[1].path).subscribe(x => { 
        x.startdate = new Date(x.startdate);
        x.enddate = new Date(x.enddate);

        this.form.patchValue(
          {
            "starttime": new Date(x.startdate),
            "endtime": new Date(x.enddate)
          });
        this.form.patchValue(x);
       });
    }

    this.service.Route(firstRoute.url[0].path, firstRoute.url[1] ? firstRoute.url[1].path : "");
  }


  updateMessage() {
    if (this.form.invalid) {
      // Replace with inline messages.
      alert("form is invalid.");
      return;
    }
    this.service.AddOrUpdateMessage(new MarketingMessage(this.form.value)).subscribe(x => {
      this.form.patchValue({ 'id': x });
      // Replace with snackbar.
      alert("Message saved.");
    });
  }
}
