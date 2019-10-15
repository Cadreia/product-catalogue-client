import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productList: Product[];

  onDelete(product: Product) {
  this.product_service.deleteProduct(product.productid).subscribe(data => {
    this.productList = this.productList.filter(p => p !== product);
  });
}
  constructor(private product_service: ProductService) { }

  ngOnInit() {
  }

}
        
        
        
