import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MenuItem } from './menuitem.class';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SystemService } from 'src/app/core/system.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menus',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuitems : MenuItem[] = [];
  constructor(private router: Router, private systemService:SystemService) { }

  ngOnInit(): void {

    if ( this.systemService.currentUser.id==0 )
    { this.router.navigate(["/user-login"]) }
        this.menuitems = [
          new MenuItem("Home","/home", true),
          new MenuItem("Users","/user-list", true),
          new MenuItem("Vendors","/vendor-list", true ),
          new MenuItem("Products","/product-list", true ),
          new MenuItem("Requests","/request-list", true),
          new MenuItem("About","/about", true),
          new MenuItem("Logout","/user-login", true)
          // more goes here!
        ];

  }

}
