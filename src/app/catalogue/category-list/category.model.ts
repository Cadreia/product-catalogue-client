import { Product } from '../product-list/product.model';

export class Category {
    constructor(public categoryid: number, public categoryname: string, public productList: Product[]) {}
}