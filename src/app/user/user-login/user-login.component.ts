import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
  })
  export class UserLoginComponent implements OnInit {

      currentUser : User = new User;

      userLoginForm: FormGroup = new FormGroup({});

      errorMessage : string ="";

      constructor(
          private systemService: SystemService,
          private userService : UserService,
          private router: Router
      ) {
          systemService.currentUser = new User;
          this.currentUser = systemService.currentUser;
      }

      ngOnInit(): void {

          this.userLoginForm = new FormGroup(
          {
              username: new FormControl("admin", // a default value for testing
              [ Validators.required,
                  Validators.maxLength(30)
              ]),

              password: new FormControl("abc123", // a default value for testing
              [ Validators.required,
                  Validators.maxLength(30)
              ])
          }
          )
      }

      login() {

          // get the user data from the form
          const newUserLogin = {
              ... this.currentUser,
              ... this.userLoginForm.value
          }

          // call the user service to validate the user login
          this.userService.loginUser(newUserLogin.username, newUserLogin.password).subscribe(
          {
              next: (data) => {
                  // do any post save processing to data here

                  // set the current user object
                  this.systemService.login(data as User)

                  // now, redirect to the home page
                  this.router.navigateByUrl("/home");
              },

              error: (e: any) => this.errorMessage = "Error: " + e,
              // optional: complete: console.log("complete")
          }
          );
        }}
