import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ListTicketComponent} from './ticket/list-ticket/list-ticket.component';
import {AddNewTicketComponent} from './ticket/add-new-ticket/add-new-ticket.component';
import { TestGameComponent } from './test-game/test-game.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListTicketComponent,
    AddNewTicketComponent,
    TestGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
