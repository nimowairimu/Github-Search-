import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  User: Users;
  Repos: Repos;
 

  constructor(private http: HttpClient) {
    this.User = new Users("","","","",0,0,0,"",new Date);
    this.Repos = new Repos("","","",new Date,0,0,"");
  }

  userRequest(searchName: string) {
   
    interface ApiResponse{
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    let Promise = new Promise((resolve, reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.User = result;
          console.log(this.User);
          resolve()
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName:string){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results) => {
          this.Repos = results

          resolve()
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }
}