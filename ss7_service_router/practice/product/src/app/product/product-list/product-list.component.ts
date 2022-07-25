import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product;
  productList: Product[] = [];


  constructor(private productService: ProductService , private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(value => {
      this.productList = value ;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete') ;
    });
  }
  getAll() {
    this.productService.getAll().subscribe(productList => {
      this.productList = productList;
    });
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(productList => {
      this.getAll();
    });
  }
}
