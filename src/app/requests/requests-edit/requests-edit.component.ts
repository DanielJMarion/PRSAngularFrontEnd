import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { requestService} from '../requests.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-requests-edit',
  templateUrl: './requests-edit.component.html',
  styleUrls: ['./requests-edit.component.css']
})

  export class requestEditComponent implements OnInit {

  // fields/properties
  request: Request = new Request();
  requestid: number = 0;
  errorMessage = "";
  requestForm: FormGroup = new FormGroup({});

  constructor(
      private requestService: requestService,
      private router: ActivatedRoute,
      private routes: Router

  ) { }

  // functions
  ngOnInit(): void {

      // build the FormControl
      this.requestForm = new FormGroup(
      {
          id: new FormControl(this.request.id,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          description: new FormControl(this.request.description,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          justification: new FormControl(this.request.justification,
          [Validators.required,
          Validators.min(0)
              // set input type="number" in .html
              // maybe add Validators.pattern to limit to 2 decimal places
          ]),

          rejectionReason: new FormControl(this.request.rejectionReason,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          deliveryMode: new FormControl(this.request.deliveryMode,
          [
              Validators.maxLength(255)
              // maybe add CSS to the form to create a long box
          ]),

          status: new FormControl(this.request.status,
          [Validators.required]),

          total: new FormControl(this.request.total,
            [Validators.required]),

            userId: new FormControl(this.request.userId,
              [Validators.required])
      })

      this.requestid = this.router.snapshot.params["id"]

      this.requestService.getrequest(this.requestid).subscribe(
      {
          next: (data) => {
          this.request = data;
          // update the FormGroup
          this.requestForm.patchValue(this.request);
          },
          error: (e: any) => this.errorMessage = "Error: " + e
          // optional: complete: console.log("complete")
      }
      );
  }

  onSubmit() {

      if (this.requestForm.invalid) {
      this.errorMessage = "Form is invalid! ";
      this.errorMessage += this.requestForm.errors;
      // probably should let the user know!
      // <span *ngIf="requestForm.controls['name'].errors">Please enter a name</span>

      return;
      }

      // get the request data from the form
      const updatedrequest = {
      ... this.request,
      ... this.requestForm.value
      }

      // call the request service to PUT the data
      this.requestService.putrequest(updatedrequest, this.request.id).subscribe(
      {
          next: (data) => {
          // do any post save processing to data here
          this.request = data,
              this.routes.navigateByUrl("/requests-list");
          },
          error: (e: any) => this.errorMessage = "Error: " + e,
          // optional: complete: console.log("complete")
      }
      );
  }
  }



