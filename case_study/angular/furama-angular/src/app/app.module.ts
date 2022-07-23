import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { UpdateFacilityComponent } from './update-facility/update-facility.component';
import { AddNewServiceComponent } from './add-new-service/add-new-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { AddNewContractComponent } from './add-new-contract/add-new-contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { ShowListServiceComponent } from './show-list-service/show-list-service.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListFacilityComponent,
    UpdateFacilityComponent,
    AddNewServiceComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    AddNewCustomerComponent,
    AddNewContractComponent,
    ListContractComponent,
    ShowListServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
