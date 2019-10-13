import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-list/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  addForm: FormGroup;
  
onSubmit() {
  this.category_service.createNewCategory(this.addForm.value)
    .subscribe(data => {
      console.log("Form's value: " + this.addForm.value);
    });
    this.category_service.displayMessage.emit(true);
}
constructor(private category_service: CategoryService, private form_builder: FormBuilder) {
 }

ngOnInit() {
  this.addForm = this.form_builder.group({
    categoryname: ['', Validators.required]
  });
}

}
