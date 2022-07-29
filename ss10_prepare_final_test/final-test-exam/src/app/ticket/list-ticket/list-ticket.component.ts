import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../model/ticket';
import {TicketService} from '../../service/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-ve-xe',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  listTicket: Ticket[];
  totalLength: any;
  page = 1;
  bookingTicket: Ticket = {
    id: 0,
    price: 0,
    startPosition: '',
    endPosition: '',
    startDate: '',
    time: '',
    garage: {
      id: '',
      name: ''
    },
    amount: 0,
  };
  endPosition: string;
  startPosition: string;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  BookingTicket() {
    if (this.bookingTicket.amount === 0) {
      alert('hết vé');
    } else {
      this.bookingTicket.amount -= 1 ;
      this.ticketService.booking(this.bookingTicket).subscribe(result => {
      }, error => {
      }, () => {
        this.ngOnInit();
      });
    }
  }

  setIdTicket(id) {
    this.ticketService.findById(id).subscribe(value => {
      this.bookingTicket = value;
      console.log(this.bookingTicket);
    });
  }

  doSearch() {
    this.ticketService.search(this.startPosition, this.endPosition).subscribe((tickets: any) => {
      if (tickets != null) {
        this.listTicket = tickets.content;
      } else {
        this.listTicket = [];
      }
      this.page = 1;
    });
  }

  getAll() {
    this.ticketService.getAllTicket().subscribe(ticketList => {
      console.log(ticketList);
      this.listTicket = ticketList;
      this.totalLength = ticketList.length;
    });
  }

  deleteTicket() {
    this.ticketService.deleteTicket(this.bookingTicket.id).subscribe(result => {
      this.getAll();
    });
  }
}
