import { Component, OnInit, EventEmitter } from '@angular/core';
import { CategoryService } from '../category-list/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../category-list/category.model';
import { Product } from '../product-list/product.model';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: any = {};
  categoryList;
  products;
  isDeleting: boolean;
  deleteMessage = false;

  onDelete(category) {
    this.isDeleting = true;
    this.category_service.deleteCategory(category.categoryid).subscribe(data => {
      this.categoryList = this.categoryList.filter(c => c !== category);
    }, error => {

    }, () => {
      setTimeout(() => {
        this.deleteMessage = true;
      }, 1500);
    });
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  constructor(
    private category_service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private product_service: ProductService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.category_service.getCategory(+params['id']).subscribe((category: any) => {
        this.category = category;
        console.log("Category: " + this.category);
        console.log("Product Name: " + this.category.categoryname);
        //this.category_service.setToStorage("category", this.category);
      });
    });
  }

  ngOnInit() {
    //this.category = this.category_service.getFromStorage("category");
    this.categoryList = this.category_service.getCategories();
    this.products = this.product_service.getProducts();
  }

}
