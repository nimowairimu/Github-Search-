import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { GithubReposComponent } from './github-profile/github-'
import {  PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes=[
    { path:'users', component:GithubUsernameComponent},
    { path:'repos',component:GithubReposComponent},
];

@NgModule({
imports : [RouterModule.forRoot(routes)],s
exports : [RouterModule]
})



export class AppRoutingModule { }