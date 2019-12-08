import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MarketingMessage } from './shared/models/marketing-message';
import { ApiRequest } from './shared/models/request';
import { MarketingComponent } from './new-message/marketing/marketing.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public GetAllMessages() : Observable<MarketingMessage[]> {
    return this.http.get<MarketingMessage[]>(environment.server + "/api/messages/all")
      .pipe(map(x => {
        return x;
      }));
  }

  public AddOrUpdateMessage(message: MarketingMessage) : Observable<number> {
    var request = new ApiRequest(message);
    return this.http.post<number>(environment.server + "/api/messages/update", request, this.httpOptions)
      .pipe(map(x => {
        return x;
      }));
  }
}
