import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../github-service/profile.service';
import {Users} from '../users';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-username',
  templateUrl: '../github-username.component.html',
  styleUrls: ['./github-username.component.css']
})
export class GithubUsernameComponent implements OnInit {
  users: Users;
  repos: Repos;
  constructor(public myService: ProfileService, private repoService: ProfileService,private http:HttpClient) {
  }

  search(searchName) {
    this.myService.userRequest(searchName).then(
      (success)=>{
        this.users = this.myService.User;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (results)=>{
          this.repos =this.repoService.Repos
          console.log(this.repos);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.search('nimowairimu');
  }
}




