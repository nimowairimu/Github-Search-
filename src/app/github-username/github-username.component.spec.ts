import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsernameComponent } from './github-username.component';

describe('GithubUsernameComponent', () => {
  let component: GithubUsernameComponent;
  let fixture: ComponentFixture<GithubUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
