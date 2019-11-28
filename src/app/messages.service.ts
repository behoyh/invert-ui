import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
import { MarketingObject } from './shared/models/marketing-object';
import {ApiRequest} from './shared/models/request';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  public GetAllMessages() : Observable<MarketingObject>
  {
    return this.http.post<MarketingObject>(environment.server + "/api/messages/all", new ApiRequest());
  }
}
