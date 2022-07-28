import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Garage} from '../model/garage';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private API_URL = 'http://localhost:3000/garage';

  constructor(private http: HttpClient) {
  }
  getAllGarages(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.API_URL + '/');
  }
}
