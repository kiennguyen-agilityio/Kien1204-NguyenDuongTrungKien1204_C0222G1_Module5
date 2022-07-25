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
  customerList: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value ;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }
}
