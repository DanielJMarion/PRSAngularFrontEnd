import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user/user.class';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { Router } from '@angular/router';



  @Injectable({
    providedIn: 'root'
})
export class SystemService {



  currentUser : User = new User();

    constructor( private router: Router ) { }

    login(user: User){
        this.currentUser = user;
        this.router.navigate(['/home']);
    }

  }

