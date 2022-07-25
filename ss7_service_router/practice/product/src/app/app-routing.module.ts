import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductAddNewComponent} from './product/product-add-new/product-add-new.component';

const routes: Routes = [{
  path: '',
  component: ProductListComponent
},
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'product/delete:id',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductAddNewComponent
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
