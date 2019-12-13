import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Output() netResult: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  emitTitle(title:string){
    debugger;
    this.netResult.emit(title);
  }

}
