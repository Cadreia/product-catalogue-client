import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CategoryService } from '../category-list/category.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class ProductService {
    viewDetails: boolean = false;
    
    constructor(private category_service: CategoryService, private http: HttpClient) {}
    getProducts(){
        return this.http.get(this.category_service.baseUrl + 'products');
    }
    getProduct(id: number) {
        return this.http.get(this.category_service.baseUrl + 'products/' + id);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.category_service.baseUrl + 'products/' + id);
    }
    createProduct(category_id: number, product: Product) {
        return this.http.post(this.category_service.baseUrl + 'products/category/' + category_id, product);
    }
    updateProduct(category_id: number, product_id: number, product: Product){
        return this.http.put(this.category_service.baseUrl + 'products/' + product_id + '/category/' + category_id, product);
    }
}