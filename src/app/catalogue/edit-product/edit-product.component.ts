import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product-list/product.service";
import { CategoryService } from "../category-list/category.service";
import { Category } from "../category-list/category.model";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"]
})
export class EditProductComponent implements OnInit {
  imageUrl: string = "/assets/images/smiley.png";
  fileToUpload: File = null;
  editMode = false;
  product: any = {};
  categories: Category[];
  product_category: any = {};
  console_value;
  SERVER_URL =
    "https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" +
    this.product.productid;

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //show image preview here
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    this.console_value = reader.readAsDataURL(this.fileToUpload);
    console.log(this.fileToUpload);
  }
  /*
  handleFileInput(event, addForm: NgForm) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      addForm.controls["image"].setValue(file);
    }
  }
*/

  onSubmit(addForm: NgForm) {
    if (this.editMode) {
      this.product_service
        .updateProduct(
          this.product_category.categoryid,
          this.product.productid,
          addForm.value
        )
        .subscribe(
          (data: any) => { },
          error => {
            alert(error);
          },
          () => {
            setTimeout(() => {
              this.category_service.displayMessage = true;
              //this.uniqueMessageText = 'Updated';
            }, 1500);
          }
        );
      console.log("ProductID is: " + this.product.productid);

      const formData = new FormData();
      formData.append("file", this.fileToUpload);
      this.http
        .post<any>(
          "https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" +
          this.product.productid,
          formData
        )
        .subscribe(res => console.log(res), err => console.log(err));
    } else {
      this.product_service
        .createProduct(this.product_category.categoryid, addForm.value)
        .subscribe(data => {
          console.log(data);
        });
      let last: any = this.product_service.getProducts()[this.product_service.getProducts().length - 1];
      const formData = new FormData();
      formData.append("file", this.fileToUpload);
      this.http
        .post<any>(
          "https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" + (last.productid + 1), formData
        )
        .subscribe(res => console.log(res), err => console.log(err));
    }
  }

  constructor(
    private route: ActivatedRoute,
    private product_service: ProductService,
    private category_service: CategoryService,
    private http: HttpClient
  ) {
    this.categories = this.category_service.getCategories();
    //for reactive form: to initialize input field
    //  this.addForm.controls.categoryname.patchValue(this.categories[0].categoryname);
    this.product_category = this.categories[0];
  }

  ngOnInit() {
    //check if form is in editMode or addMode
    this.route.params.subscribe((params: Params) => {
      this.editMode = params["id"] != null;

      if (this.editMode) {
        this.product_service
          .getProduct(+params["id"])
          .subscribe((product: any) => {
            this.product = product;
            //this.addForm = this.fb.group({
            //  productname: [this.product.productname],
            //  quantity: [this.product.quantity],
            //  price: [this.product.price],
            //  categoryname: [this.product.categoryname],
            //});
          });
      }
    });
  }
}
