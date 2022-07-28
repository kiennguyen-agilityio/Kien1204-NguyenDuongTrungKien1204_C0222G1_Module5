import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  totalLength: any;
  page = 1;

  customerDelete: Customer = {
    id: 0,
    code: '',
    typeCustomer: {
      id: '',
      name: ''
    },
    name: '',
    gender: '',
    birthday: '',
    idCard: 0,
    phone: 0,
    email: '',
    address: ''
  };
  searchValue: string;

  constructor(private customerService: CustomerService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
      this.toastr.success('Loaded successfully!', 'Customer!');
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  getAll() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
      this.totalLength = customerList.length;
    });
  }

  setIdCustomerDelete(customer) {
    this.customerDelete = customer;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerDelete.id).subscribe(result => {
      this.getAll();
    });
  }

  doSearch() {
    this.searchValue = this.searchValue.trim();
    this.customerService.search(this.searchValue).subscribe(
      (data) => this.customerList = data
    );
  }
}
