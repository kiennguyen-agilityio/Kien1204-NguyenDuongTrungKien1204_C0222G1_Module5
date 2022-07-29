import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {Garage} from '../model/garage';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:8080/api/ticket';

  constructor(private http: HttpClient) {
  }
  getAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL);
  }
  addNewTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.API_URL + '/save', ticket);
  }

  booking(ticket: Ticket ): Observable<Ticket> {
    return this.http.patch<Ticket>(this.API_URL + '/' + ticket.id, ticket);
  }

  findById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.API_URL + '/' + id);
  }

  search(startPosition: string, endPosition: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>
    (this.API_URL + `/search/${startPosition}&${endPosition}`);
  }

  deleteTicket(id: number ): Observable<Ticket> {
    return this.http.delete<Ticket>(this.API_URL + '/delete/' + id);
  }
}
