import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private product_service: ProductService) { }

  ngOnInit() {
    this.product_service.viewDetails = false;
    this.product_service.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }

}
