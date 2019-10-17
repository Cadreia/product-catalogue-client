import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private category_service:CategoryService) {

   }

  ngOnInit() {
    this.category_service.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

}
