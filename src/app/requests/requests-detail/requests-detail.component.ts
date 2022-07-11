import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { requestService } from '../requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests-detail',
  templateUrl: './requests-detail.component.html',
  styleUrls: ['./requests-detail.component.css']
})
export class requestsDetailComponent implements OnInit {

  requests!: Request;
  requestsid: number=0;
  errorMessage = "";

  constructor(
      private requestService: requestService,
      private router:ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    this.requestsid = this.router.snapshot.params['id'];
    this.requestService.getrequest(this.requestsid).subscribe(
      data => { this.requests = data as Request;},
      err=> {console.log(err);}
    )
  }

}


