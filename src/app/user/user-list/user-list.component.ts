import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //variable for the collection of users
  users:User[] = []

  //variable that holds the error message
  errorMessage="";

  //Injects the user service
  constructor(private userservice: UserService) { }

  //calls method list data in user service
  ngOnInit(): void
  {
    this.userservice.listdata().subscribe(data => {
      this.users = data;
      this.errorMessage = "";
    },
    error => {
      this.errorMessage = "These are not the droids you are looking for " + error;
    }
  );

  }

}
