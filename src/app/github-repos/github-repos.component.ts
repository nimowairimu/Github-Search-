import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/github-service/profile.service';
import { Repos } from '../repos'

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  myRepos:Repos[];
  constructor(public repoService:ProfileService) { }

  findRepo(username){
    this.repoService.getRepoInfo(username).subscribe(data =>{
      this.myRepos = data;
      console.log(this.myRepos)

    })
  }
  ngOnInit() {
    this.findRepo('nimowairimu');
  }


}

