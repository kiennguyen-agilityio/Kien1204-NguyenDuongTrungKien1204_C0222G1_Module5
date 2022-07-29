import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {

  serviceEditForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.serviceEditForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      areaUse: new FormControl('', Validators.required),
      view: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      numberOfFloor: new FormControl('', [Validators.required]),
    });
  }
}
