import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubReposComponent } from './github-profile/github-repos/github-repos.component';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileService } from './github-service/profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HighlightDirective } from './highlight.directive'
  

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    GithubUsernameComponent,
    PagenotfoundComponent,
    NavbarComponent,
    SearchUserComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]

})
export class AppModule { }

