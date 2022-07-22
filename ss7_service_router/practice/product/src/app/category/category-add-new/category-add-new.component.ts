import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-add-new',
  templateUrl: './category-add-new.component.html',
  styleUrls: ['./category-add-new.component.css']
})
export class CategoryAddNewComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category);
    this.categoryForm.reset();
  }
}
