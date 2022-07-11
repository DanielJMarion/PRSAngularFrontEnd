import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Request } from '../request.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { requestService } from '../requests.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';


@Component({
  selector: 'app-requests-create',
  templateUrl: './requests-create.component.html',
  styleUrls: ['./requests-create.component.css']
})
export class requestsCreateComponent implements OnInit {

  Request = new Request;

  requestForm: FormGroup = new FormGroup({});

  isError = "";

  constructor(
    private requestSvc: requestService,
    private router: Router,
    // private route: ActivatedRoute,
    private systemSvc: SystemService
    ) { }

    ngOnInit(): void {
    this.requestForm = new FormGroup(
      {


        description: new FormControl("",
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        justification: new FormControl("",
          [ Validators.required,
            Validators.maxLength(30)
          ]),

          deliveryMode: new FormControl("Pickup",
          [ Validators.required,
            Validators.maxLength(30)
          ]),

          userId: new FormControl(this.systemSvc.currentUser.id)



    })
  }

  onSubmit() {
    if (this.requestForm.invalid) {
      // probably should let the request know!
      return;
    }

    // get the request data from the form
    const newRequest = {
      ... this.Request,
      ... this.requestForm.value
    }

    // call the request service to post the data
    this.requestSvc.postData(newRequest).subscribe(
      resp => {
        this.Request = resp as Request;
        // now, redirect to the list
        this.router.navigateByUrl("/requests-create");},
        err => {console.log(err);}  // probably should let the request know!
    );

  }

}


