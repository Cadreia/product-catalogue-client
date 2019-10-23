import { Component, OnInit, EventEmitter } from '@angular/core';
import { CategoryService } from '../category-list/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../category-list/category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: any = {};
  categoryList;
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
  constructor(private category_service: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.category_service.getCategory(+params['id']).subscribe((category: any) => {
        this.category = category;
        this.category_service.setToStorage("category", this.category);
      });
    });
  }

  ngOnInit() {
      this.category = this.category_service.getFromStorage("category");
      this.categoryList = this.category_service.getCategories()
  }

}
