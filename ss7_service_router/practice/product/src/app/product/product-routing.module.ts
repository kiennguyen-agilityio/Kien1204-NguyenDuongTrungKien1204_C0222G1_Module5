import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddNewComponent} from './product-add-new/product-add-new.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  }, {
    path: 'create',
    component: ProductAddNewComponent
  }, {
    path: 'edit/:id',
    component: ProductEditComponent
  }, {
    path: 'delete/:id',
    component: ProductDeleteComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
