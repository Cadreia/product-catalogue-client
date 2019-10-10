import { Category } from '../category-list/category.model';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public price: number,
        public category: Category
        ) {}
}