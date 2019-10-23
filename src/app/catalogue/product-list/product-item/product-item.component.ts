import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productList: Product[];
  productname: string;

  onEdit() {
    console.log("To edit");
  }
  onDelete(product: Product) {
    this.product_service.deleteProduct(product.productid).subscribe(data => {
      this.productList = this.productList.filter(p => p !== product);
    });
  }
  constructor(private product_service: ProductService) { }

  ngOnInit() {
  }
  search(){
    if(this.productname !=""){
          this.productList = this.productList.filter(res=>{
           return res.productname.toLocaleLowerCase().match(
          this.productname.toLocaleLowerCase());
    });
    }else if(this.productname = ""){
      this.ngOnInit()

}


  }

  
}
