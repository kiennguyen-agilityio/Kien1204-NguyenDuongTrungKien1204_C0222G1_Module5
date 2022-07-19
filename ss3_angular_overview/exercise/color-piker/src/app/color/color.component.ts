import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  background: string = '#f93301';

  constructor() {
  }

  changeColor(color) {
    this.background = color;
  }

  ngOnInit(): void {
  }
}
