import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

  export class userEditComponent implements OnInit {

  // fields/properties
  user: User = new User();
  userid: number = 0;
  errorMessage = "";
  userForm: FormGroup = new FormGroup({});

  constructor(
      private userservice: UserService,
      private router: ActivatedRoute,
      private routes: Router

  ) { }

  // functions
  ngOnInit(): void {

      // build the FormControl
      this.userForm = new FormGroup(
      {
          id: new FormControl(this.user.id,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          username: new FormControl(this.user.username,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          password: new FormControl(this.user.password,
          [Validators.required,
          Validators.min(0)
              // set input type="number" in .html
              // maybe add Validators.pattern to limit to 2 decimal places
          ]),

          firstname: new FormControl(this.user.firstname,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          lastname: new FormControl(this.user.lastname,
          [
              Validators.maxLength(255)
              // maybe add CSS to the form to create a long box
          ]),

          phone: new FormControl(this.user.phone,
          [Validators.required]),

          email: new FormControl(this.user.email,
            [Validators.required]),

            isReviewer: new FormControl(this.user.isReviewer,
              [Validators.required]),

              isAdmin: new FormControl(this.user.isAdmin,
                [Validators.required]),
      })

      this.userid = this.router.snapshot.params["id"]

      this.userservice.getUser(this.userid).subscribe(
      {
          next: (data) => {
          this.user = data;
          // update the FormGroup
          this.userForm.patchValue(this.user);
          },
          error: (e: any) => this.errorMessage = "Error: " + e
          // optional: complete: console.log("complete")
      }
      );
  }

  onSubmit() {

      if (this.userForm.invalid) {
      this.errorMessage = "Form is invalid! ";
      this.errorMessage += this.userForm.errors;
      // probably should let the user know!
      // <span *ngIf="userForm.controls['name'].errors">Please enter a name</span>

      return;
      }

      // get the user data from the form
      const updateduser = {
      ... this.user,
      ... this.userForm.value
      }

      // call the user service to PUT the data
      this.userservice.putUser(updateduser, this.user.id).subscribe(
      {
          next: (data) => {
          // do any post save processing to data here
          this.user = data,
              this.routes.navigateByUrl("/user-list");
          },
          error: (e: any) => this.errorMessage = "Error: " + e,
          // optional: complete: console.log("complete")
      }
      );
  }
  }



