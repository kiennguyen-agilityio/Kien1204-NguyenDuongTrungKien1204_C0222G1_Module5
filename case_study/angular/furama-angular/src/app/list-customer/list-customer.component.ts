import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  private customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

   getAll() {
    // @ts-ignore
     this.customers = this.customerService.getAll();
  }
}
