import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  repo: Repos;
  constructor( public repoService: UserserviceService ) { }

  repoSearch(searchName){
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
    this.repoSearch('Owiti-Charles');
  }
 
}

 
}