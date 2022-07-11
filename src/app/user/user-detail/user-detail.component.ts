import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;
  userid: number=0;
  errorMessage="";


  constructor(
      private userService: UserService,
      private router:ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    this.userid = this.router.snapshot.params['id'];
    this.userService.getUser(this.userid).subscribe(
      data => { this.user = data as User;},
      err=> {console.log(err);}
    )
  }

}
