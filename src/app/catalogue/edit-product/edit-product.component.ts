import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { CategoryService } from '../category-list/category.service';
import { Category } from '../category-list/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editMode = false;
  product: any = {};
  categories: Category[];
  product_category: any = {};

  onSubmit(addForm: NgForm) {
    if (this.editMode) {
      this.product_service.updateProduct(this.product_category.categoryid, this.product.productid, addForm.value).subscribe((data: any) => {
      }, error => {
        alert(error);
      }, () => {
        setTimeout(() => {
          this.category_service.displayMessage = true;
          //this.uniqueMessageText = 'Updated';
        }, 1500);
      });
    } else {
      this.product_service.createProduct(this.product_category.categoryid, addForm.value).subscribe((data) => {
        console.log(data);
      });
    }

  }

  constructor(
    private route: ActivatedRoute,
    private product_service: ProductService,
    private category_service: CategoryService
  ) {
    this.category_service.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      //for reactive form: to initialize input field
      //  this.addForm.controls.categoryname.patchValue(this.categories[0].categoryname);
      this.product_category = this.categories[0];
    });
  }

  ngOnInit() {
    //check if form is in editMode or addMode
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;

      if (this.editMode) {
        this.product_service.getProduct(+params['id']).subscribe((product: any) => {
          this.product = product;
          //this.addForm = this.fb.group({
          //  productname: [this.product.productname],
          //  quantity: [this.product.quantity],
          //  price: [this.product.price],
          //  categoryname: [this.product.categoryname],
          //});
        });
      }
    });
  }
}