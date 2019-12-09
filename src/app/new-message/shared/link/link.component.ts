import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
