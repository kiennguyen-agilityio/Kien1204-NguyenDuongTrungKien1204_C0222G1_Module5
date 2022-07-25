import { Component, OnInit } from '@angular/core';
import {Service} from '../model/service';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-show-list-service',
  templateUrl: './show-list-service.component.html',
  styleUrls: ['./show-list-service.component.css']
})
export class ShowListServiceComponent implements OnInit {
 services: Service[] = [];
  constructor(private serviceService: ServiceService ) { }

  ngOnInit(): void {
   this.getAll();
  }
 getAll() {
 this.services  = this.serviceService.getAll();
 }
}
