import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import {  PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes=[
    { path:'users', component:GithubUsernameComponent},
    { path:'repos',component:GithubReposComponent},
    { path:'',redirectTo:"/users",pathMatch:"full"},
    { path: '**' ,component:PagenotfoundComponent}
];

@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})



export class AppRoutingModule { }