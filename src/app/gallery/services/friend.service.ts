import { Injectable } from '@angular/core';
import {HttpClient , HttpResponse , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  httpOptions;

  constructor(private http: HttpClient) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {
      headers: httpHeaders
    };
  }

  getUsers(){
    return this.http.get(environment.apiURL + '/getAllUsers' , this.httpOptions)
      .pipe(map(response => {
        return response;
      }
      ));
  }
}
