import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-add-new',
  templateUrl: './category-add-new.component.html',
  styleUrls: ['./category-add-new.component.css']
})
export class CategoryAddNewComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
