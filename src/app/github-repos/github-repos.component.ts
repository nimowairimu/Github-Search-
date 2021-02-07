import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/github-service/profile.service';
import { Repos } from '../repos'

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  repo: Repos;
  constructor( public repoService: ProfileService ) { }

  repoSearch(searchName){
    this.repoService.getRepos(searchName).then(
      (results)=>{
        this.repo =this.repoService.Repos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('nimowairimu');
  }
 
}
