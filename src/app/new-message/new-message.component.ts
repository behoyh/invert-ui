import { Component, OnInit } from '@angular/core';
import { MarketingMessage } from '../shared/models/marketing-message';
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { CheckUploadSize } from '../shared/helpers/check-upload-size';

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
  get isTargeted(): AbstractControl {
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
  get blobId(): AbstractControl {
    return this.form.controls.blobId;
  }
  get startDate(): AbstractControl {
    return this.form.controls.startDate;
  }
  get endDate(): AbstractControl {
    return this.form.controls.endDate;
  }
  get startTime(): AbstractControl {
    return this.form.controls.startTime;
  }
  get endTime(): AbstractControl {
    return this.form.controls.endTime;
  }

  constructor(private service: MessagesService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [0, Validators.required],
      type: ['', Validators.required],
      active: [true, Validators.required],
      urgent: [false, Validators.required],
      isTargeted: [false, Validators.required],
      title: ['', Validators.required],
      body: [''],
      link: [''],
      blobId: 0,
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      startTime: [new Date()],
      endTime: [new Date()],
      created: [moment(), Validators.required],
      modified: [moment(), Validators.required]
    });
  }

  targetedList = [];

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
        console.log(x);
        x.startDate = new Date(x.startDate);
        x.endDate = new Date(x.endDate);
        this.form.patchValue(
          {
            "startTime": new Date(x.startDate),
            "endTime": new Date(x.endDate)
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
    console.log(this.form.value);
    this.service.AddOrUpdateMessage(new MarketingMessage(this.form.value)).subscribe(x => {
      this.form.patchValue({ 'id': x });
      // Replace with snackbar.
      alert("Message saved.");
    });
  }

  TargetListChanged(input: any) {

    // if (fileList[0].name.endsWith(".csv") || fileList[0].name.endsWith(".txt")) {
    //   this.TargetedFileName = fileList[0].name;
    //   this.TargetedAccountList = AutoFixCsv.getListFromCsv(reader.result.toString());
    //   return;
    // }
  }
}
