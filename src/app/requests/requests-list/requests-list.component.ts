import { Component, OnInit } from '@angular/core';
import { RequestLinesService } from 'src/app/requests-lines/request-lines.service';
import { Request } from '../request.class';
import { requestService } from '../requests.service';


@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

  requests:Request[] = []

  //variable that holds the error message
  errorMessage="";

  //Injects the requests service
  constructor(private requestService: requestService) { }

  //calls method list data in requests service
  ngOnInit(): void
  {
    this.requestService.listdata().subscribe(data => {
      this.requests = data;
      this.errorMessage = "";
    },
    error => {
      this.errorMessage = "These are not the droids you are looking for " + error;
    }
  );


  }
}
