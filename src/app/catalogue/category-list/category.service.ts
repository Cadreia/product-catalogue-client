import { Injectable, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CategoryService {
    displayMessage = new EventEmitter<boolean>();
    baseUrl = "https://product-catalog-api-springboot.herokuapp.com/api/";
    showCategoryForm = false;
    emitCategory = new Subject<Category>();

    getCategories(): Observable<Category[]>{
        return this.http.get<Category[]>(this.baseUrl + 'category');
    }
    getCategory(id: number): Observable<Category> {
        return this.http.get<Category>(this.baseUrl + 'category/' + id);
    }
    createNewCategory(category: Category) {
        console.log('Newly Added Category: ' + category);
        return this.http.post(this.baseUrl + 'category', category);
    }
    deleteCategory(id: number){
        return this.http.delete(this.baseUrl + 'category/' + id);
    }
    updateCategory(id: number, category){
        return this.http.put(this.baseUrl + 'category/' + id, category);
    }

    constructor(private http: HttpClient) {}
}