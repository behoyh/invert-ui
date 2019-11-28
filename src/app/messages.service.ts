import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MarketingMessage } from './shared/models/marketing-message';
import { ApiRequest } from './shared/models/request';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  public GetAllMessages() : Observable<MarketingMessage[]> {
    return this.http.get<MarketingMessage[]>(environment.server + "/api/messages/all")
      .pipe(map(x => {
        return x;
      }));
  }
}
