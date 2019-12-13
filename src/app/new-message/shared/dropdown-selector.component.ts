import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MessagesService } from 'src/app/messages.service';


@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.scss']
})
export class DropdownSelectorComponent implements OnInit {

  @Select(state => state.app.dropdownText) dropdownText$: Observable<string[]>;

  constructor(private service: MessagesService) { }

  ngOnInit() {

  }

  updateState(type: string) {
    this.service.Route(type);
  }
}
