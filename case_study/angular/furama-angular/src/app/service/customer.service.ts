import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer [] = [{
    id: 'KH-001',
    typeCustomer: 'Vip',
    name: 'nguyen van a',
    gender: 'nam',
    idCard: 123456,
    phone: 456789,
    email: 'nguyenvana@gmail.com',
    address: 'da nang'
  },
    {
      id: 'KH-001',
      typeCustomer: 'Vip',
      name: 'nguyen van a',
      gender: 'nam',
      idCard: 123456,
      phone: 456789,
      email: 'nguyenvana@gmail.com',
      address: 'da nang'
    },
    {
      id: 'KH-001',
      typeCustomer: 'Vip',
      name: 'nguyen van a',
      gender: 'nam',
      idCard: 123456,
      phone: 456789,
      email: 'nguyenvana@gmail.com',
      address: 'da nang'
    },
    {
      id: 'KH-001',
      typeCustomer: 'Vip',
      name: 'nguyen van a',
      gender: 'nam',
      idCard: 123456,
      phone: 456789,
      email: 'nguyenvana@gmail.com',
      address: 'da nang'
    },
    {
      id: 'KH-001',
      typeCustomer: 'Vip',
      name: 'nguyen van a',
      gender: 'nam',
      idCard: 123456,
      phone: 456789,
      email: 'nguyenvana@gmail.com',
      address: 'da nang'
    },
  ];


  constructor() {
  }

  getAll() {
    return this.customers;
  }
}
