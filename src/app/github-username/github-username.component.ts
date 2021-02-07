import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../github-service/profile.service';
import {Users} from '../users';
import { Repos } from '../repos';

@Component({
  selector: 'app-github-username',
  templateUrl: './github-username.component.html',
  styleUrls: ['./github-username.component.css']
})
export class GithubUsernameComponent implements OnInit {
  users: Users;
  repos: Repos;
  constructor(public myService: ProfileService, private repoService: ProfileService) {
  }

  search(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.users = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results)=>{
          this.repos =this.repoService.allRepos
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




