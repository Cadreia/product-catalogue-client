import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editMode;
  addForm: FormGroup;
  product: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private product_service: ProductService) { }

  ngOnInit() {
    //initialize form fields
    this.addForm = this.fb.group({
      productname: ['', Validators.required],
    });

    //check if form is in editMode or addMode
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;

      if (this.editMode) {
        this.product_service.getProduct(+params['id']).subscribe((product: any) => {
          this.product = product;
          this.addForm = this.fb.group({
            productname: [this.product.productname, Validators.required],
            quantity: [this.product.productname, Validators.required],
            price: [this.product.productname, Validators.required],
          });
        });
      }
    });
  }
}