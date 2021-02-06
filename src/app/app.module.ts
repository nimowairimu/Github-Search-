import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubReposComponent } from './github-profile/github-repos/github-repos.component';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubReposComponent,
    GithubUsernameComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
