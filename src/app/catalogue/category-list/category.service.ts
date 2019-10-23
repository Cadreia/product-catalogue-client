import { Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CategoryService {
  private categories: Category[];
  storageName = 'categories';
  baseUrl = "https://product-catalaog-api-spring.herokuapp.com/api/";
  showCategoryForm = false;
  emitCategory = new Subject<Category>();
  displayMessage: boolean = false;

  getCategories(): Category[] {
    this.categories = this.getFromStorage(this.storageName);
    this.http
      .get(this.baseUrl + "category")
      .subscribe((categories: any) => {
        this.categories = categories;
        this.setToStorage(this.storageName, this.categories);
      });
      return this.categories;
  }
  setToStorage(storageName, storageList) {
    localStorage.setItem(storageName, JSON.stringify(storageList));
  }
  getFromStorage(storageName) {
    let localStorageItem = JSON.parse(localStorage.getItem(storageName));
    return localStorageItem == null? [] : localStorageItem;
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + "category/" + id);
  }
  createNewCategory(category: Category) {
    console.log("Newly Added Category: " + category);
    return this.http.post(this.baseUrl + "category", category);
  }
  deleteCategory(id: number) {
    return this.http.delete(this.baseUrl + "category/" + id);
  }
  updateCategory(id: number, category) {
    return this.http.put(this.baseUrl + "category/" + id, category);
  }

  constructor(private http: HttpClient) {}
}
