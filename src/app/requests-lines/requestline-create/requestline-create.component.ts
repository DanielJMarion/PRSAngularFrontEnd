import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Requestline } from '../requestline.class';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { RequestLinesService } from '../request-lines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class requestlineCreateComponent implements OnInit {

  newrequestline = new Requestline;

  requestlineForm: FormGroup = new FormGroup({});

  isError = "";
  requestline: any;

  constructor(
    private requestlinesSvc: RequestLinesService,
    private router: Router,
    // private route: ActivatedRoute,
    // private systemSvc: SystemService
    ) { }
  ngOnInit(): void {
    this.requestlineForm = new FormGroup(
      {


        RequestId: new FormControl(this.requestline.RequestId,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        ProductId: new FormControl(this.requestline.ProductId,
          [ Validators.required,
            Validators.maxLength(30)
          ]),
        Quantity: new FormControl(this.requestline.Quantity,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

    })
  }

  onSubmit() {
    if (this.requestlineForm.invalid) {
      // probably should let the requestline know!
      return;
    }

    // get the requestline data from the form
    const newrequestline = {
      ... this.requestline,
      ... this.requestlineForm.value
    }

    // call the requestline service to post the data
    this.requestlinesSvc.postData(newrequestline).subscribe(
      resp => {
        this.requestlinesSvc = resp as RequestLinesService;
        // now, redirect to the list
        this.router.navigateByUrl("/requestline-list");},
        err => {console.log(err);}  // probably should let the requestline know!
    );

  }

}


