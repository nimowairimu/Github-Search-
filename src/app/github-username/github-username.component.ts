import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-github-username',
  templateUrl: '../github-username.component.html',
  styleUrls: ['./github-username.component.css']
})
export class GithubUsernameComponent implements OnInit {
  users:Users[];
  searchUserName(username){
   this.httpServiceService.findUser(username).then(
     ()=>{
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error)=>{
       console.log(error)
     }
   )
  }
  constructor(public httpServiceService:HttpServiceService) { }

  ngOnInit() {
    this.searchUserName('nimowairimu');
  }

}
