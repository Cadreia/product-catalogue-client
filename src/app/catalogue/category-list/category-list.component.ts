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
  displayMessage = false;

  constructor(private category_service:CategoryService) {
    this.category_service.displayMessage.subscribe(response => {
      this.displayMessage = response;
      setTimeout(() => {
        this.displayMessage = false;
      }, 1500);
    });
   }

  ngOnInit() {
    this.category_service.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

}
