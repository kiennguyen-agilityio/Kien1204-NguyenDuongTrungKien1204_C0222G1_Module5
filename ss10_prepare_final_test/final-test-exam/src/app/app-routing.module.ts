import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTicketComponent} from './ticket/list-ticket/list-ticket.component';
import {AddNewTicketComponent} from './ticket/add-new-ticket/add-new-ticket.component';
import {TestGameComponent} from './test-game/test-game.component';

const routes: Routes = [
  {
    path: '',
    component:  ListTicketComponent
  },
  {
    path: 'add',
    component:  AddNewTicketComponent
  },
  {
    path: 'ticket/:id',
    component:  ListTicketComponent
  },
  {
    path: 'test',
    component:  TestGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
