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
  user: Users;
  repo: Repos;
  constructor(public myService: ProfileService, private repoService: ProfileService) {
  }

  search(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.search('Owiti-Charles');
  }
}




