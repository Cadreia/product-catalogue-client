import { Category } from '../category-list/category.model';

export class Product {
    constructor(
        public productid: number,
        public productname: string,
        public quantity: number,
        public price: number,
        public category: Category
        ) {}
}