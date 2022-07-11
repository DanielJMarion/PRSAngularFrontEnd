import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { vendorsService} from '../vendors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { vendor } from '../vendor';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendors-edit.component.html',
  styleUrls: ['./vendors-edit.component.css']
})

  export class vendorEditComponent implements OnInit {

  // fields/properties
  vendor: vendor = new vendor();
  vendorid: number = 0;
  errorMessage = "";
  vendorForm: FormGroup = new FormGroup({});

  constructor(
      private vendorsService: vendorsService,
      private router: ActivatedRoute,
      private routes: Router

  ) { }

  // functions
  ngOnInit(): void {

      // build the FormControl
      this.vendorForm = new FormGroup(
      {
        code: new FormControl(this.vendor.code,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        name: new FormControl(this.vendor.name,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        address: new FormControl(this.vendor.address,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        city: new FormControl(this.vendor.city,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        state: new FormControl(this.vendor.state,
          [
            Validators.maxLength(30)
          ]),

        zip: new FormControl(this.vendor.zip,
          [ Validators.email,
            Validators.maxLength(30)
          ]),

        phone: new FormControl(this.vendor.phone,
          [  ]),

        email: new FormControl(this.vendor.email,
          [  ]),
      })

      this.vendorid = this.router.snapshot.params["id"]

      this.vendorsService.getvendor(this.vendorid).subscribe(
      {
          next: (data) => {
          this.vendor = data;
          // update the FormGroup
          this.vendorForm.patchValue(this.vendor);
          },
          error: (e: any) => this.errorMessage = "Error: " + e
          // optional: complete: console.log("complete")
      }
      );
  }

  onSubmit() {

      if (this.vendorForm.invalid) {
      this.errorMessage = "Form is invalid! ";
      this.errorMessage += this.vendorForm.errors;
      // probably should let the vendor know!
      // <span *ngIf="vendorForm.controls['name'].errors">Please enter a name</span>

      return;
      }

      // get the vendor data from the form
      const updatedvendor = {
      ... this.vendor,
      ... this.vendorForm.value
      }

      // call the vendor service to PUT the data
      this.vendorsService.putvendor(updatedvendor, this.vendor.id).subscribe(
      {
          next: (data) => {
          // do any post save processing to data here
          this.vendor = data,
              this.routes.navigateByUrl("/vendors-list");
          },
          error: (e: any) => this.errorMessage = "Error: " + e,
          // optional: complete: console.log("complete")
      }
      );
  }
  }



