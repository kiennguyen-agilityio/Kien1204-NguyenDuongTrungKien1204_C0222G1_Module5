import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {DetailCustomerComponent} from './customer/detail-customer/detail-customer.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'service',
    component: ListCustomerComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'add-customer',
    component: CreateCustomerComponent
  },
  {
    path: 'edit-customer',
    component: UpdateCustomerComponent
  },
  {
    path: 'edit-customer/:id',
    component: UpdateCustomerComponent
  },
  {
    path: 'delete-customer/:id',
    component: ListCustomerComponent
  },
  {
    path: 'view-customer/:id',
    component: DetailCustomerComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
