import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productservice} from '../product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __importDefault } from 'tslib';
import { product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class productsCreateComponent implements OnInit {

  products = new product;

  productForm: FormGroup = new FormGroup({});

  isError = "";

  constructor(
    private productSvc: productservice,
    private router: Router,
    // private route: ActivatedRoute,
    // private systemSvc: SystemService
    ) { }
  ngOnInit(): void {
    this.productForm = new FormGroup(
      {


        vendorId: new FormControl(0,
          [ Validators.required,

          ]),

       partNbr: new FormControl("",
          [ Validators.required,
            Validators.maxLength(30)
          ]),

          name: new FormControl('',
          [ Validators.required,
            Validators.maxLength(30)
          ]),
          price: new FormControl(0,
          [ Validators.required,

          ]),
          unit: new FormControl('',
          [ Validators.required,
            Validators.maxLength(30)
          ]),
          photoPath: new FormControl('',
          [ Validators.required,
            Validators.maxLength(30)
          ])

    })
  }

  onSubmit() {
    if (this.productForm.invalid) {
      // probably should let the products know!
      //return;
    }

    // get the products data from the form
    const newproducts = {
      ... this.products,
      ... this.productForm.value
    }
    alert(JSON.stringify(newproducts))
    // call the products service to post the data
    this.productSvc.postData(newproducts).subscribe(
      (      resp: product) => {
        this.products = resp as product;
        // now, redirect to the list
        this.router.navigateByUrl("/products-create");},
        err => {console.log(err);}  // probably should let the products know!
    );

  }

}


