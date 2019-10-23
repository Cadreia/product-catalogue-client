import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  onViewDetails(category: Category) {
    this.router.navigate(['/categories', category.categoryid]);
  }

  constructor(private router: Router, private category_service: CategoryService) {
  }

  ngOnInit() {
  }

}
