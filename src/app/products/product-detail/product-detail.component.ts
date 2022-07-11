import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { productservice } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class productDetailComponent implements OnInit {

  product!: product;
  productid: number = 0;
  errorMessage = "";

  constructor(
      private productservice: productservice,
      private router:ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    this.productid = this.router.snapshot.params['id'];
    this.productservice.getproduct(this.productid).subscribe(
      data => { this.product = data as product;},
      err=> {console.log(err);}
    )
  }

}


