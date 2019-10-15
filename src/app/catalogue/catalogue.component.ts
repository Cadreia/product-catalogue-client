import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category-list/category.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  constructor(private category_service: CategoryService) { }

  ngOnInit() {
  }

}
