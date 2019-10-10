import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({providedIn: 'root'})
export class CategoryService {
    categories: Category[] = [
        new Category(1, "Kitchen Utensils"),
        new Category(2, "Power and Electronics"),
        new Category(3, "Clothing and Fashion"),
        new Category(4, "Cosmetics"),
    ];
    constructor() {}
}