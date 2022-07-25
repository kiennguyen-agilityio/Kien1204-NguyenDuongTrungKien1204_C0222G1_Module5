import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customerList';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }
  addCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }
  updateCustomer() {
  }

  deleteCustomer() {
  }
}