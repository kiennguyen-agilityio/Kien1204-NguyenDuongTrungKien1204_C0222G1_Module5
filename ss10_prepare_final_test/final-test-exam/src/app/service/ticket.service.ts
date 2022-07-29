import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {Garage} from '../model/garage';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:3000/ticket';

  constructor(private http: HttpClient) {
  }
  getAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL);
  }
  addNewTicket(ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.API_URL, ticket);
  }

  booking(ticket: Ticket ): Observable<Ticket> {
    return this.http.patch<Ticket>(this.API_URL + '/' + ticket.id, ticket);
  }

  findById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.API_URL + '/' + id);
  }

  searchByStartPosition(search: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL + '?startPosition_like=' + search);
  }

  searchByEndPosition(search: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL + '?endPosition=' + search);
  }

  deleteTicket(id: number ): Observable<Ticket> {
    return this.http.delete<Ticket>(this.API_URL + '/' + id);
  }
}
