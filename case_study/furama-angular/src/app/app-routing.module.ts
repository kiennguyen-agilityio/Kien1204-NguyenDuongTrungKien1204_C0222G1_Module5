import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListServiceComponent} from './show-list-service/show-list-service.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {AddNewCustomerComponent} from './add-new-customer/add-new-customer.component';
const routes: Routes = [
  {
    path: 'service',
    component: ShowListServiceComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'add-customer',
    component: AddNewCustomerComponent
  },
  {
    path: 'contract',
    component: ListContractComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
