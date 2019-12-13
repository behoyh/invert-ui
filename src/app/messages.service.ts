import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MarketingMessage } from './shared/models/marketing-message';
import { ApiRequest } from './shared/models/request';
import { MarketingComponent } from './new-message/marketing/marketing.component';
import { SetState } from './shared/app.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,private store: Store,private router: Router) { }

  public GetAllMessages(): Observable<MarketingMessage[]> {
    return this.http.get<MarketingMessage[]>(environment.server + "/api/messages/all")
      .pipe(map(x => {
        return x;
      }));
  }

  public GetMessage(id: string): Observable<MarketingMessage> {
    var request = new ApiRequest(id);
    return this.http.post<MarketingMessage>(environment.server + "/api/messages/select", request, this.httpOptions)
      .pipe(map(x => {
        return x;
      }));
  }

  public AddOrUpdateMessage(message: MarketingMessage): Observable<number> {
    var request = new ApiRequest(message);
    return this.http.post<number>(environment.server + "/api/messages/update", request, this.httpOptions)
      .pipe(map(x => {
        return x;
      }));
  }

  public Route(type:string){
    var app = this.store.snapshot().app;

    this.store.dispatch([new SetState({
      ...app,
      type: type,
      dropdownText: type,
      imagePreviewUri: type + ".png"
    }),
    new Navigate(["new", type])]);
  }
}
