import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { GithubReposComponent } from 'github-profile/github-repos.component';
import {  NotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:"user-profile", component:UsersComponent},
  {path:"search-repo", component:ReopsitoriesComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }