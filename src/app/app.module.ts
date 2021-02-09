import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileService } from './github-service/profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';
import { SearchComponent } from './search/search.component'
  

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    GithubUsernameComponent,
    PagenotfoundComponent,
    NavbarComponent,
    HighlightDirective,
    DatePipePipe,
    SearchComponent,

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

