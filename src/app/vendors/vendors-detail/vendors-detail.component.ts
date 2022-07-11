import { Component, OnInit } from '@angular/core';
import { vendor } from '../vendor';
import { vendorsService } from '../vendors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendors-detail',
  templateUrl: './vendors-detail.component.html',
  styleUrls: ['./vendors-detail.component.css']
})
export class vendorsDetailComponent implements OnInit {

  vendors!: vendor;
  vendorsid: number = 0;



  constructor(
      private vendorsService: vendorsService,
      private router:ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    this.vendorsid = this.router.snapshot.params['id'];
    this.vendorsService.getvendor(this.vendorsid).subscribe(
      data => { this.vendors = data as vendor;},
      err=> {console.log(err);}
    )
  }

}


