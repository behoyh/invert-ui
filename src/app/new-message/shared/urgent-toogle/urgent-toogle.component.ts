import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-urgent-toogle',
  templateUrl: './urgent-toogle.component.html',
  styleUrls: ['./urgent-toogle.component.scss']
})
export class UrgentToogleComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
