import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CategoryService } from '../category-list/category.service';

@Injectable({providedIn: 'root'})
export class ProductService {
    private products: Product[] = [
        new Product(1, "Body Lotion", 4, 2000, this.category_service.categories[3]),
        new Product(1, "iPhone 11", 2, 800000, this.category_service.categories[1]),
        new Product(1, "Pressure Pot", 4, 2000, this.category_service.categories[0]),
        new Product(1, "Watch", 6, 8000, this.category_service.categories[2]),
        new Product(1, "Sun Glasses", 27, 1000, this.category_service.categories[2]),
        new Product(1, "Pressing Iron", 12, 10000, this.category_service.categories[1]),
        new Product(1, "Hand Bags", 4, 14000, this.category_service.categories[2]),
    ];
    viewDetails: boolean = false;
    constructor(private category_service: CategoryService) {}
    getProducts() {
        return this.products.slice();
    }
    getProduct(id: number) {
        let index = id - 1;
        return this.getProducts()[index];
    }
}