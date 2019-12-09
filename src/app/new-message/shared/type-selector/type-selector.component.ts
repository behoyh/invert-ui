import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss']
})
export class TypeSelectorComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
