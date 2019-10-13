import { Injectable, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class CategoryService {
    displayMessage = new EventEmitter<boolean>();
    addCategory = false;
    baseUrl = "https://product-catalog-api-springboot.herokuapp.com/api/";

    getCategories(): Observable<Category>{
        return this.http.get<Category>(this.baseUrl + 'category');
    }
    createNewCategory(category: Category) {
        console.log('Newly Added Category: ' + category);
        return this.http.post(this.baseUrl + 'category', category);
    }
    deleteCategory(id: number): Observable<Category>{
        return this.http.delete<Category>(this.baseUrl + 'category/' + id);
    }
    constructor(private http: HttpClient) {}
}