import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryAddNewComponent} from './category-add-new/category-add-new.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CategoryListComponent, CategoryAddNewComponent, CategoryEditComponent, CategoryDeleteComponent], imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
