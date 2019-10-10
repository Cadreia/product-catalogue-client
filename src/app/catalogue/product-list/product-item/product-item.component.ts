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

  onViewDetails(index: number) {
    this.product_service.viewDetails = true;
    let id = index + 1;
    this.router.navigate([id], {relativeTo: this.route});
  }

  constructor(private router: Router, private route: ActivatedRoute, private product_service: ProductService) { }

  ngOnInit() {
  }

}
