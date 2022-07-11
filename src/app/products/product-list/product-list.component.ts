import { Component, OnInit } from '@angular/core';
import { productservice } from '../product.service';
import { product } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //variable for the collection of products
  products:product[] = []

  //variable that holds the error message
  errorMessage="";

  //Injects the products service
  constructor(private ProductService: productservice) { }

  //calls method list data in products service
  ngOnInit(): void
  {
    this.ProductService.listdata().subscribe(
      data => {
      this.products = data;
      this.errorMessage = "";
    },
    error => {
      this.errorMessage = "These are not the droids you are looking for " + error;
    }
  );


  }

}
