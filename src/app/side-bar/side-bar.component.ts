import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
    ){}

    public isLoggedIn() {
      return this.userAuthService.isLoggedIn();
    }
  
    public logout() {
      this.userAuthService.clear();

      this.router.navigate(['/']);
    }
  
    public isAdmin(){
      return this.userAuthService.isAdmin();
      
    }
  
    public isUser(){
      return this.userAuthService.isUser();
    }

}
