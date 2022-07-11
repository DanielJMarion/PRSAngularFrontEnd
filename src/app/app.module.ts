import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { userEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { productsCreateComponent } from './products/product-create/product-create.component';
import { productDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { requestlineCreateComponent } from './requests-lines/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requests-lines/requestline-edit/requestline-edit.component';
import { vendorsDetailComponent } from './vendors/vendors-detail/vendors-detail.component';
import { vendorEditComponent } from './vendors/vendors-edit/vendors-edit.component';
import { VendorsListComponent } from './vendors/vendors-list/vendors-list.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { VendorsCreateComponent } from './vendors/vendors-create/vendors-create.component';
import { requestsCreateComponent } from './requests/requests-create/requests-create.component';
import { requestsDetailComponent } from './requests/requests-detail/requests-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { requestEditComponent } from './requests/requests-edit/requests-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    UserListComponent,
    UserDetailComponent,
    userEditComponent,
    UserCreateComponent,
    productsCreateComponent,
    productDetailComponent,
    ProductEditComponent,
    requestlineCreateComponent,
    RequestlineEditComponent,
    VendorsCreateComponent,
    vendorsDetailComponent,
    vendorEditComponent,
    VendorsListComponent,
    VendorsListComponent,
    RequestsListComponent,
    ProductListComponent,
    requestsCreateComponent,
    requestsDetailComponent,
    UserLoginComponent,
    requestsCreateComponent,
    productsCreateComponent,
    requestEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
