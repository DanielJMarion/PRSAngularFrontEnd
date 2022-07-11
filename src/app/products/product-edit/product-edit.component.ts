import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productservice} from '../product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

  export class ProductEditComponent implements OnInit {

  // fields/properties
  product: product = new product();
  productid: number = 0;
  errorMessage = "";
  productForm: FormGroup = new FormGroup({});

  constructor(
      private productservice: productservice,
      private router: ActivatedRoute,
      private routes: Router

  ) { }

  // functions
  ngOnInit(): void {

      // build the FormControl
      this.productForm = new FormGroup(
      {
          partNbr: new FormControl(this.product.partNbr,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          name: new FormControl(this.product.name,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          price: new FormControl(this.product.price,
          [Validators.required,
          Validators.min(0)
              // set input type="number" in .html
              // maybe add Validators.pattern to limit to 2 decimal places
          ]),

          unit: new FormControl(this.product.unit,
          [Validators.required,
          Validators.maxLength(30)
          ]),

          photoPath: new FormControl(this.product.photoPath,
          [
              Validators.maxLength(255)
              // maybe add CSS to the form to create a long box
          ]),

          vendorId: new FormControl(this.product.vendorId,
          [Validators.required])
      })

      this.productid = this.router.snapshot.params["id"]

      this.productservice.getproduct(this.productid).subscribe(
      {
          next: (data) => {
          this.product = data;
          // update the FormGroup
          this.productForm.patchValue(this.product);
          },
          error: (e: any) => this.errorMessage = "Error: " + e
          // optional: complete: console.log("complete")
      }
      );
  }

  onSubmit() {

      if (this.productForm.invalid) {
      this.errorMessage = "Form is invalid! ";
      this.errorMessage += this.productForm.errors;
      // probably should let the user know!
      // <span *ngIf="productForm.controls['name'].errors">Please enter a name</span>

      return;
      }

      // get the product data from the form
      const updatedProduct = {
      ... this.product,
      ... this.productForm.value
      }

      // call the product service to PUT the data
      this.productservice.putProduct(updatedProduct, this.product.id).subscribe(
      {
          next: (data) => {
          // do any post save processing to data here
          this.product = data,
              this.routes.navigateByUrl("/product-list");
          },
          error: (e: any) => this.errorMessage = "Error: " + e,
          // optional: complete: console.log("complete")
      }
      );
  }
  }

