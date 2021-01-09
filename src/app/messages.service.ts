import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { MarketingMessage } from './shared/models/marketing-message';
import { ApiRequest } from './shared/models/request';
import { SetState } from './shared/app.actions';
import { Store } from '@ngxs/store';
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

  constructor(private http: HttpClient,private store: Store) { }

  public GetAllMessages(): Observable<MarketingMessage[]> {
    return this.http.get<MarketingMessage[]>(environment.server + "/api/messages/all")
      .pipe(map(x => {
        return x;
      }));
  }

  public GetMessage(id: string): Observable<MarketingMessage> {
    var request = new ApiRequest(parseInt(id));
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

  public UploadBlob(message: Blob, type:string): Observable<number> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/octet-stream'
      })
    };

    return this.http.put<number>(environment.server + "/api/Blob?type=" + type, message, httpOptions)
      .pipe(map(x => {
        return x;
      }));
  }

  public GetBlob(blobId: number): Observable<any> {

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream');

    let httpOptions:any = {
      headers: headers,
      responseType: 'blob' as 'blob'
    };

    return this.http.get(environment.server + "/api/Blob?BLOB_ID=" + blobId, httpOptions)
      .pipe(map(x => {
        return x;
      }));
  }

  public Route(type:string, id:string){
    var app = this.store.snapshot().app;

    this.store.dispatch([new SetState({
      ...app,
      type: type,
      dropdownText: type,
      imagePreviewUri: type + ".png"
    }),
    new Navigate(["new", type, id])]);
  }
}
