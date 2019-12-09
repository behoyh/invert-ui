import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
