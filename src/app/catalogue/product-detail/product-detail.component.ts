import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  goBack() {
    this.product_service.viewDetails = false;
    this.router.navigate(['/products']);
  }

  constructor(private route: ActivatedRoute, private product_service: ProductService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.product_service.getProduct(this.id);
    });
  }

}
