import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL = 'https://api.github.com/users/';
token = '?access_token=' + environment.apiKey;
  constructor(public http: HttpClient ) { 

  }

  getRepoInfo(username: string): Observable<any> {
    return this.http.get(this.URL + username + '/repos' +  this.token)
  }
}