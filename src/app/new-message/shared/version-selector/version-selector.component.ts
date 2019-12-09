import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-version-selector',
  templateUrl: './version-selector.component.html',
  styleUrls: ['./version-selector.component.scss']
})
export class VersionSelectorComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
