import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  

  constructor(private http:Http) { }
}
