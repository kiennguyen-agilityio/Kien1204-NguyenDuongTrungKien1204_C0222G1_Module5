import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductAddNewComponent} from './product/product-add-new/product-add-new.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoryAddNewComponent} from './category/category-add-new/category-add-new.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddNewComponent,
    ProductEditComponent,
    CategoryAddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
