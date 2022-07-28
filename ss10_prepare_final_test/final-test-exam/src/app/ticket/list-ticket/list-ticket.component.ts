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
  searchValue: string;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit(): void {
    this.ticketService.getAllTicket().subscribe(value => {
      this.listTicket = value;
      // this.toastr.success('Loaded successfully!', 'Customer!');
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  BookingTicket() {
    this.bookingTicket.amount -= 1;
    this.ticketService.booking(this.bookingTicket).subscribe(result => {
    }, error => {
    }, () => {
      this.ngOnInit();
    });
  }

  setIdTicket(id) {
    this.ticketService.findById(id).subscribe(value => {
      this.bookingTicket = value;
      console.log(this.bookingTicket);
    });
  }

  doSearch() {
    this.searchValue = this.searchValue.trim();
    this.ticketService.searchByStartPosition(this.searchValue).subscribe(
      (data) => this.listTicket = data
    );
  }
}
