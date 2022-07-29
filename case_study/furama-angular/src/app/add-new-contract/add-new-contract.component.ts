import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {
  contractForm: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(0),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.required),
      totalPayment: new FormControl('', [Validators.required]),
    });
  }
}
