import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category-list/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../category-list/category.model';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  addForm: FormGroup;
  editMode: boolean;
  category: any = {};

  onSubmit() {
    if (this.editMode) {
      this.category_service.updateCategory(this.category.categoryid, this.addForm.value).subscribe((data: any) => {
        console.log("Form id: " + this.category.categoryid);
      }, error => {
        alert(error);
      });
    }
    if (!this.editMode) {
      this.category_service.createNewCategory(this.addForm.value)
        .subscribe(data => {
          console.log("Form's value: " + this.addForm.value);
        });
      this.category_service.displayMessage.emit(true);
    }
  }

  constructor(
    private category_service: CategoryService,
    private form_builder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    //initialize form fields
    this.addForm = this.form_builder.group({
      categoryname: ['', Validators.required]
    });

    //check if form is in editMode or addMode
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;

      if (this.editMode) {
        this.category_service.getCategory(+params['id']).subscribe((category: any) => {
          this.category = category;
          this.addForm = this.form_builder.group({
            categoryname: [this.category.categoryname, Validators.required]
          });
        });
      }
    });
    
  }

}