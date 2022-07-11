import { Component, OnInit } from '@angular/core';
import { vendorsService } from '../vendors.service';
import { vendor } from '../vendor';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {
  //variable for the collection of vendors
  vendors:vendor[] = []

  //variable that holds the error message
  errorMessage="";

  //Injects the vendors service
  constructor(private vendorsService: vendorsService) { }

  //calls method list data in vendors service
  ngOnInit(): void
  {
    this.vendorsService.listdata().subscribe(data => {
      this.vendors = data;
      this.errorMessage = "";
    },
    error => {
      this.errorMessage = "These are not the droids you are looking for " + error;
    }
  );
  }

}
