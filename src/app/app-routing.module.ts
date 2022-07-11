import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorsListComponent } from './vendors/vendors-list/vendors-list.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { requestsDetailComponent } from './requests/requests-detail/requests-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorsCreateComponent } from './vendors/vendors-create/vendors-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { requestlineCreateComponent } from './requests-lines/requestline-create/requestline-create.component';
import {  } from './requests/requests-create/requests-create.component';
import { productsCreateComponent } from './products/product-create/product-create.component';
import { vendorsDetailComponent } from './vendors/vendors-detail/vendors-detail.component';import { productDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { vendorEditComponent } from './vendors/vendors-edit/vendors-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { userEditComponent } from './user/user-edit/user-edit.component';
import{requestsCreateComponent} from './requests/requests-create/requests-create.component';
import { requestEditComponent } from './requests/requests-edit/requests-edit.component';


const routes: Routes =
[
  {path: 'vendor-list', component:VendorsListComponent},
  {path: 'user-list', component:UserListComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'e404', component:E404Component},
  {path: 'request-list', component:RequestsListComponent},
  {path: 'requests-detail/:id', component:requestsDetailComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'user-create', component:UserCreateComponent},
  {path: 'user-detail/:id', component:UserDetailComponent},
  {path:'requestline-create', component: requestlineCreateComponent},
  {path: 'products-create', component: productsCreateComponent},
  {path: 'vendors-create', component: VendorsCreateComponent},
  {path: 'vendors-detail/:id', component:vendorsDetailComponent},
  {path: 'product-detail/:id', component:productDetailComponent},
  {path: 'vendors-edit/:id', component:vendorEditComponent},
  {path: 'product-edit/:id', component:ProductEditComponent},
  {path: 'user-login', component:UserLoginComponent},
  {path: 'user-edit/:id', component: userEditComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'requests-create', component: requestsCreateComponent},
  {path: 'requests-edit/:id', component: requestEditComponent},
  {path: "vendors-list", component: VendorsListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

