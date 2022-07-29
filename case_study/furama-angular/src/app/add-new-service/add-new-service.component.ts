import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent implements OnInit {
  serviceForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
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
