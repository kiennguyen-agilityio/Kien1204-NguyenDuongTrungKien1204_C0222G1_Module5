import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Garage} from '../../model/garage';
import {Router} from '@angular/router';
import {TicketService} from '../../service/ticket.service';
import {Ticket} from '../../model/ticket';
import {GarageService} from '../../service/garage.service';

@Component({
  selector: 'app-add-new-ticket',
  templateUrl: './add-new-ticket.component.html',
  styleUrls: ['./add-new-ticket.component.css']
})
export class AddNewTicketComponent implements OnInit {

  ticketForm: FormGroup;
  garages: Garage[];
  // tslint:disable-next-line:ban-types
  private allTicket: Object;
  constructor(private ticketService: TicketService, private garageService: GarageService,
              private router: Router) { }

  ngOnInit(): void {
    this.getGarages();
    this.ticketForm = new FormGroup({
      id: new FormControl(),
      price: new FormControl('', [Validators.required]),
      startPosition: new FormControl('', [Validators.required]),
      endPosition: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required]),
      garage: new FormGroup({
        id: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit() {
    console.log(this.ticketForm.value);
    this.ticketService.addNewTicket(this.ticketForm.value).subscribe(() => {
      this.router.navigateByUrl('/customer');
      this.ticketForm.reset();
    });
  }

  getGarages() {
    this.garageService.getAllGarages().subscribe(garages => {
      this.garages = garages;
    });
    console.log(this.garages);
  }
}
