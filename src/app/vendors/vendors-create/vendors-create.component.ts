import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { vendor } from '../vendor';
import { __importDefault } from 'tslib';
import { vendorsService } from '../vendors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors-create',
  templateUrl: './vendors-create.component.html',
  styleUrls: ['./vendors-create.component.css']
})
export class VendorsCreateComponent implements OnInit {

  Vendor = new vendor;

  vendorForm: FormGroup = new FormGroup({});

  isError = "";

  constructor(
    private vendorSvc: vendorsService,
    private router: Router,
    // private route: ActivatedRoute,
    // private systemSvc: SystemService
    ) { }
  ngOnInit(): void {
    this.vendorForm = new FormGroup(
      {
        code: new FormControl(this.Vendor.code,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        name: new FormControl(this.Vendor.name,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        address: new FormControl(this.Vendor.address,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        city: new FormControl(this.Vendor.city,
          [ Validators.required,
            Validators.maxLength(30)
          ]),

        state: new FormControl(this.Vendor.state,
          [
            Validators.maxLength(30)
          ]),

        zip: new FormControl(this.Vendor.zip,
          [ Validators.email,
            Validators.maxLength(30)
          ]),

        phone: new FormControl(this.Vendor.phone,
          [  ]),

        email: new FormControl(this.Vendor.email,
          [  ]),

    })
  }

  onSubmit() {
    if (this.vendorForm.invalid) {
      // probably should let the user know!
      return;
    }

    // get the user data from the form
    const newVendor = {
      ... this.Vendor,
      ... this.vendorForm.value
    }

    // call the user service to post the data
    this.vendorSvc.postData(newVendor).subscribe(
      resp => {
        this.Vendor = resp as vendor;
        // now, redirect to the list
        this.router.navigateByUrl("/vendors-create");},
        err => {console.log(err);}  // probably should let the user know!
    );

  }

}
