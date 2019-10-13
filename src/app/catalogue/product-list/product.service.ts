import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CategoryService } from '../category-list/category.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class ProductService {
    private products: Product[];
    viewDetails: boolean = false;
    
    constructor(private category_service: CategoryService, private http: HttpClient) {}
    getProducts(): Observable<Product> {
        return this.http.get<Product>(this.category_service.baseUrl + 'products');
    }
    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(this.category_service.baseUrl + 'products/' + id);
    }
}