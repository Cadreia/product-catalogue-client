import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() categoryList: Category[];

  onEdit() {

  }
  onDelete(category: Category) {
    this.category_service.deleteCategory(category.categoryid).subscribe(data => {
      this.categoryList = this.categoryList.filter(c => c !== category);
    });
  }

  constructor(private router: Router, private category_service: CategoryService) { }

  ngOnInit() {
  }

}
