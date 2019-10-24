(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/catalogue.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/catalogue.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-category-list></app-category-list>\n\n<app-product-list></app-product-list>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-detail/category-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/category-detail/category-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"category_service.displayMessage\" class=\"row mb-2\">\n    <div class=\"col\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n            Category Deleted!\n        </div>\n    </div>\n</div>\n<div class=\"clearfix\">\n    <h5>Category: {{ category.categoryname }}</h5>\n    <p>Total Products: {{products.length}}</p>\n    <div class=\"float-right\">\n        <button class=\"btn btn-info btn-sm mr-1\" (click)=\"onEdit()\">Edit</button>\n        <button class=\"btn btn-danger btn-sm mr-1\" type=\"button\" (click)=\"onDelete(category)\">\n            <span *ngIf=\"!category_service.displayMessage && isDeleting\" class=\"spinner-border spinner-border-sm\"\n                role=\"status\" aria-hidden=\"true\"></span>\n            Delete\n        </button>\n    </div>\n\n    <h5>Available Products</h5>\n    <div class=\"row\" *ngFor=\"let product of products\">\n        <div class=\"col-sm-6\" *ngIf=\"product.category.categoryname == category.categoryname\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img [src]=\"product.image_uri\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{ product.productname }}</h5>\n                    <p class=\"card-text\">Price: {{ product.price }}CFA</p>\n                    <p class=\"card-text\">Quantity: {{ product.quantity }}</p>\n                    <a href=\"#\" class=\"btn btn-info btn-sm\">View Details</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-list/category-item/category-item.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/category-list/category-item/category-item.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!--\n    <div class=\"col-md-12 text-center\">\n        <a [routerLink]=\"['/products']\" style=\"cursor: pointer;\" class=\"list-group-item all-button mb-3\">All\n        </a>\n    </div>\n-->\n    <div class=\"col-md-12\" *ngFor=\"let category of categoryList\">\n        <a style=\"cursor: pointer;\" class=\"list-group-item product-item mb-3 clearfix\" (click)=\"onViewDetails(category)\">\n            <div class=\"float-left mr-3\">\n                <h6 style=\"font-weight: bold;\" class=\"list-group-item-heading pb-2\">\n                    {{ category.categoryname }}</h6>\n            </div>\n            <!--\n            <div class=\"float-right\">\n                <button class=\"btn btn-sm\" (click)=\"onViewDetails(category)\"><i class=\"fas fa-hand-point-right\"></i> View Details</button>\n            </div>\n        -->\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-list/category-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/category-list/category-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"p-2\">Category List</h5>\n<div class=\"row\">\n    <div class=\"col-md-5\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <button class=\"btn btn-success btn-sm float-right mt-3 mr-2\" [routerLink]=\"['/categories', 'new']\" ><i class=\"fas fa-plus\"></i> Add Category</button>\n            </div>\n        </div>\n\n        <div class=\"mt-3\">\n            <div class=\"cat-card\">\n                <app-category-item [categoryList]=\"categories\"></app-category-item>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-7 pt-3\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-startup/category-startup.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/category-startup/category-startup.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mt-3 text-center\">Please Select a Category</h5> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/edit-category/edit-category.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/edit-category/edit-category.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"category_service.displayMessage\" class=\"row\">\n    <div class=\"col\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Category {{ uniqueMessageText }}!\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <form class=\"pt-3 pb-4 clearfix\" [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"category_name\">Name</label>\n                <input type=\"text\" formControlName=\"categoryname\" placeholder=\"category name\" class=\"form-control\"\n                    id=\"category_name\">\n\n                <small *ngIf=\"!editMode\" class=\"form-text text-muted\">Add New Category.</small>\n                <small *ngIf=\"editMode\" class=\"form-text text-muted\">Edit Category.</small>\n            </div>\n            <div class=\"float-right\">\n                <button *ngIf=\"!editMode\" class=\"btn btn-success btn-sm mr-2\">Save</button>\n                <button *ngIf=\"editMode\" class=\"btn btn-success btn-sm mr-2\">Update</button>\n                <button type=\"button\" class=\"btn btn-info btn-sm mr-2\">Reset</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [routerLink]=\"['../']\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/edit-product/edit-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/edit-product/edit-product.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"!editMode\" class=\"p-2\">Add New Product</h5>\n<h5 *ngIf=\"editMode\" class=\"p-2\">Edit Product</h5>\n<div class=\"row pt-4\">\n  <div class=\"col-md-5 my-auto mx-auto\">\n    <form name=\"form\" (ngSubmit)=\"addForm.form.valid && onSubmit(addForm)\" #addForm=\"ngForm\">\n      {{ addForm.value | json}}\n      <div class=\"form-group mb-4\">\n        <label for=\"product_name\">Name</label>\n        <input type=\"text\" name=\"productname\" [(ngModel)]=\"product.productname\" #productname=\"ngModel\"\n          class=\"form-control\" id=\"product_name\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image\">Image</label>\n        <img [src]=\"imageUrl\" style=\"width: 200px; height: 150px;\" id=\"image\" />\n        <input class=\"form-control-file\" #Image=\"ngModel\" [(ngModel)]=\"product.image_uri\" type=\"file\" name=\"image\"\n          accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" />\n      </div>\n      <div class=\"form-group mb-4\">\n        <label for=\"quantity\">Quantity</label>\n        <input type=\"number\" min=\"1\" value=\"1\" name=\"quantity\" [(ngModel)]=\"product.quantity\" #quantity=\"ngModel\"\n          class=\"form-control\" id=\"quantity\" />\n      </div>\n      <div class=\"form-group mb-4\">\n        <label for=\"price\">Price (CFA)</label>\n        <input type=\"text\" name=\"price\" [(ngModel)]=\"product.price\" #price=\"ngModel\" class=\"form-control\" id=\"price\" />\n      </div>\n      <div class=\"form-group mb-2\">\n        <label for=\"category\">Category</label>\n        <select class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"product_category\" #category=\"ngModel\">\n          <option disabled>Choose...</option>\n          <option *ngFor=\"let category of categories\" [ngValue]=\"category\">{{ category.categoryname }}\n          </option>\n        </select>\n      </div>\n      <div class=\"float-right mt-3\">\n        <button type=\"submit\" *ngIf=\"!editMode\" class=\"btn btn-success btn-sm mr-2\"\n          [disabled]=\"Image.value == '' || !addForm.valid\">\n          Save\n        </button>\n        <button type=\"submit\" *ngIf=\"editMode\" class=\"btn btn-success btn-sm mr-2\">\n          Update\n        </button>\n        <button type=\"reset\" class=\"btn btn-info btn-sm mr-2\">Clear</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [routerLink]=\"['/products']\">\n          Back\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/header/header.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/header/header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\">Prod Cata</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav mx-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\" routerLinkActive=\"active\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/categories']\" routerLinkActive=\"active\">Categories</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"><i class=\"fas fa-user\"></i> LogIn</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"><i class=\"fas fa-sign-out-alt\"></i> LogOut</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"text-center col-md-6\" id=\"banner-text\">\n                <p class=\"m-0\"><span style=\"font-size: 1.5rem;\">Welcome to </span>\n                    <span class=\"brand\">ProdCata</span></p>\n                <button class=\"btn mt-4\" [routerLink]=\"['/products']\">View Inventory</button>\n        </div>\n        <div class=\"col-md-3\" id=\"banner-img\">\n        </div>\n        <div class=\"col-md-3\" id=\"banner-img2\">\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/page-not-found/page-not-found.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/page-not-found/page-not-found.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-detail/product-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/product-detail/product-detail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center\">\n    <div class=\"row py-4\">\n        <div class=\"col\">\n            <button class=\"btn float-right\" (click)=\"goBack()\">GoBack</button>\n        </div>\n    </div>\n    <div class=\"col py-3\">\n        <h5>Product Detail: {{ product.productname }}</h5>\n    </div>\n    <div class=\"row mx-5 px-5 content\">\n        <div class=\"col-md-5\">\n            <img [src]=\"product.image_uri\" alt=\"Product Image\">\n        </div>\n        <div class=\"col-md-7 px-5 py-4\">\n            <h1 class=\"text-uppercase pb-4\">{{ product.productname }}</h1>\n            <div>PRICE</div>\n            <p class=\"big-text\">{{ product.price }}<span>CFA</span></p>\n            <p>QUANTITY: <span>{{ product.quantity }}</span></p>\n            <p>CATEGORY: <span>{{ product.category.categoryname }}</span></p>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-list/product-item/product-item.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/product-list/product-item/product-item.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\" style=\"cursor: pointer;\">\n    <thead>\n        <tr>\n            <th>Image</th>\n            <th>Name</th>\n            <th>In Stock</th>\n            <th>Category</th>\n            <th>Price (CFA)</th>\n            <th>Actions</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product of productList\">\n            <td><img [src]=\"product.image_uri\" class=\"img-thumbnail\" style=\"height: 70px; width: 100px;\"></td>\n            <td [routerLink]=\"[product.productid]\" routerLinkActive=\"router-link-active\">{{ product.productname }}</td>\n            <td><span class=\"badge\">{{ product.quantity }}</span></td>\n            <td>{{ product.category.categoryname }}</td>\n            <td>{{ product.price }}</td>\n            <td>\n                <button class=\"btn btn-info btn-sm mr-1\" (click)=\"onEdit()\"\n                    [routerLink]=\"['/products', product.productid, 'edit']\"><i class=\"fas fa-pen-alt\"></i> Edit</button>\n                <button class=\"btn btn-danger btn-sm delete\" (click)=\"onDelete(product)\"><i\n                        class=\"fas fa-trash-alt\"></i> Trash</button>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-list/product-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catalogue/product-list/product-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"p-2 mb-3\">Product List</h5>\n\n<div class=\"row mb-3\">\n    <div class=\"col-sm-12\">\n        <button class=\"btn btn-success btn-sm mr-2 mb-2 float-right ml-auto\" [routerLink]=\"['/products', 'new']\"><i\n                class=\"fas fa-plus\"></i> Add\n            Product</button>\n    </div>\n    <div class=\"col-sm-12 mb-3\">\n\n    </div>\n</div>\n<div class=\"mx-3\">\n    <app-product-item [productList]=\"products\"></app-product-item>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _catalogue_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogue/home/home.component */ "./src/app/catalogue/home/home.component.ts");
/* harmony import */ var _catalogue_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalogue/product-list/product-list.component */ "./src/app/catalogue/product-list/product-list.component.ts");
/* harmony import */ var _catalogue_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalogue/page-not-found/page-not-found.component */ "./src/app/catalogue/page-not-found/page-not-found.component.ts");
/* harmony import */ var _catalogue_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalogue/product-detail/product-detail.component */ "./src/app/catalogue/product-detail/product-detail.component.ts");
/* harmony import */ var _catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalogue/edit-product/edit-product.component */ "./src/app/catalogue/edit-product/edit-product.component.ts");
/* harmony import */ var _catalogue_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalogue/category-detail/category-detail.component */ "./src/app/catalogue/category-detail/category-detail.component.ts");
/* harmony import */ var _catalogue_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catalogue/edit-category/edit-category.component */ "./src/app/catalogue/edit-category/edit-category.component.ts");
/* harmony import */ var _catalogue_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalogue/category-list/category-list.component */ "./src/app/catalogue/category-list/category-list.component.ts");
/* harmony import */ var _catalogue_category_startup_category_startup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalogue/category-startup/category-startup.component */ "./src/app/catalogue/category-startup/category-startup.component.ts");












const routes = [
    { path: '', component: _catalogue_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'products', component: _catalogue_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], children: []
    },
    { path: 'products/new', component: _catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"] },
    { path: 'products/:id', component: _catalogue_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'products/:id/edit', component: _catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"] },
    {
        path: 'categories', component: _catalogue_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], children: [
            { path: '', component: _catalogue_category_startup_category_startup_component__WEBPACK_IMPORTED_MODULE_11__["CategoryStartupComponent"] },
            { path: 'new', component: _catalogue_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__["EditCategoryComponent"] },
            { path: ':id', component: _catalogue_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_8__["CategoryDetailComponent"] },
            { path: ':id/edit', component: _catalogue_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__["EditCategoryComponent"] },
        ]
    }, { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _catalogue_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'product-catalogue';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "./src/app/catalogue/catalogue.component.ts");
/* harmony import */ var _catalogue_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalogue/category-list/category-list.component */ "./src/app/catalogue/category-list/category-list.component.ts");
/* harmony import */ var _catalogue_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalogue/product-list/product-list.component */ "./src/app/catalogue/product-list/product-list.component.ts");
/* harmony import */ var _catalogue_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catalogue/product-list/product-item/product-item.component */ "./src/app/catalogue/product-list/product-item/product-item.component.ts");
/* harmony import */ var _catalogue_category_list_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalogue/category-list/category-item/category-item.component */ "./src/app/catalogue/category-list/category-item/category-item.component.ts");
/* harmony import */ var _catalogue_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalogue/home/home.component */ "./src/app/catalogue/home/home.component.ts");
/* harmony import */ var _catalogue_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalogue/header/header.component */ "./src/app/catalogue/header/header.component.ts");
/* harmony import */ var _catalogue_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catalogue/page-not-found/page-not-found.component */ "./src/app/catalogue/page-not-found/page-not-found.component.ts");
/* harmony import */ var _catalogue_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catalogue/product-detail/product-detail.component */ "./src/app/catalogue/product-detail/product-detail.component.ts");
/* harmony import */ var _catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catalogue/edit-product/edit-product.component */ "./src/app/catalogue/edit-product/edit-product.component.ts");
/* harmony import */ var _catalogue_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catalogue/edit-category/edit-category.component */ "./src/app/catalogue/edit-category/edit-category.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _catalogue_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./catalogue/category-detail/category-detail.component */ "./src/app/catalogue/category-detail/category-detail.component.ts");
/* harmony import */ var _catalogue_category_startup_category_startup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./catalogue/category-startup/category-startup.component */ "./src/app/catalogue/category-startup/category-startup.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_6__["CatalogueComponent"],
            _catalogue_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"],
            _catalogue_category_list_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_10__["CategoryItemComponent"],
            _catalogue_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
            _catalogue_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemComponent"],
            _catalogue_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _catalogue_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _catalogue_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
            _catalogue_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"],
            _catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_15__["EditProductComponent"],
            _catalogue_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_16__["EditCategoryComponent"],
            _catalogue_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_18__["CategoryDetailComponent"],
            _catalogue_category_startup_category_startup_component__WEBPACK_IMPORTED_MODULE_19__["CategoryStartupComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/catalogue/catalogue.component.css":
/*!***************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRhbG9ndWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/catalogue/catalogue.component.ts":
/*!**************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category.service */ "./src/app/catalogue/category-list/category.service.ts");



let CatalogueComponent = class CatalogueComponent {
    constructor(category_service) {
        this.category_service = category_service;
    }
    ngOnInit() {
    }
};
CatalogueComponent.ctorParameters = () => [
    { type: _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
CatalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalogue',
        template: __webpack_require__(/*! raw-loader!./catalogue.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/catalogue.component.html"),
        styles: [__webpack_require__(/*! ./catalogue.component.css */ "./src/app/catalogue/catalogue.component.css")]
    })
], CatalogueComponent);



/***/ }),

/***/ "./src/app/catalogue/category-detail/category-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/catalogue/category-detail/category-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRlZ29yeS1kZXRhaWwvY2F0ZWdvcnktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/catalogue/category-detail/category-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/catalogue/category-detail/category-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-list/category.service */ "./src/app/catalogue/category-list/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-list/product.service */ "./src/app/catalogue/product-list/product.service.ts");





let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(category_service, route, router, product_service) {
        this.category_service = category_service;
        this.route = route;
        this.router = router;
        this.product_service = product_service;
        this.category = {};
        this.deleteMessage = false;
        this.route.params.subscribe((params) => {
            this.category_service.getCategory(+params['id']).subscribe((category) => {
                this.category = category;
                console.log("Category: " + this.category);
                console.log("Product Name: " + this.category.categoryname);
                this.category_service.setToStorage("category", this.category);
            });
        });
    }
    onDelete(category) {
        this.isDeleting = true;
        this.category_service.deleteCategory(category.categoryid).subscribe(data => {
            this.categoryList = this.categoryList.filter(c => c !== category);
        }, error => {
        }, () => {
            setTimeout(() => {
                this.deleteMessage = true;
            }, 1500);
        });
    }
    onEdit() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    ngOnInit() {
        this.category = this.category_service.getFromStorage("category");
        this.categoryList = this.category_service.getCategories();
        this.products = this.product_service.getProducts();
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _product_list_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
CategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail',
        template: __webpack_require__(/*! raw-loader!./category-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-detail/category-detail.component.html"),
        styles: [__webpack_require__(/*! ./category-detail.component.css */ "./src/app/catalogue/category-detail/category-detail.component.css")]
    })
], CategoryDetailComponent);



/***/ }),

/***/ "./src/app/catalogue/category-list/category-item/category-item.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/catalogue/category-list/category-item/category-item.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-size: 15px;\n}\na {\n    border-radius: 0 !important;\n}\na:hover {\n    border-left: 2px solid grey;\n}\na:focus, a:active {\n    border: 2px solid grey;\n}\n.btn {\n    border: none;\n    color: white;\n    background: rgb(168, 50, 121);\n}\n.btn:focus, .btn:active, .btn:hover {\n    outline: none !important;\n    box-shadow: none !important;\n    background: #7B2559;\n}\n.product-item {\n    min-height: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktaXRlbS9jYXRlZ29yeS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWl0ZW0vY2F0ZWdvcnktaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuYTpob3ZlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xufVxuYTpmb2N1cywgYTphY3RpdmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG4uYnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjgsIDUwLCAxMjEpO1xufVxuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmUsIC5idG46aG92ZXIge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzdCMjU1OTtcbn1cbi5wcm9kdWN0LWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/catalogue/category-list/category-item/category-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/catalogue/category-list/category-item/category-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/catalogue/category-list/category.service.ts");




let CategoryItemComponent = class CategoryItemComponent {
    constructor(router, category_service) {
        this.router = router;
        this.category_service = category_service;
    }
    onViewDetails(category) {
        this.router.navigate(['/categories', category.categoryid]);
    }
    ngOnInit() {
    }
};
CategoryItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoryItemComponent.prototype, "categoryList", void 0);
CategoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-item',
        template: __webpack_require__(/*! raw-loader!./category-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-list/category-item/category-item.component.html"),
        styles: [__webpack_require__(/*! ./category-item.component.css */ "./src/app/catalogue/category-list/category-item/category-item.component.css")]
    })
], CategoryItemComponent);



/***/ }),

/***/ "./src/app/catalogue/category-list/category-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/catalogue/category-list/category-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.cat-card {\n    padding: 0 10px;\n}\n\nh5 {\n    background-image: linear-gradient(-120deg, #d38312, #a83279);\n    color: white;\n}\n\n.col-md-6:first-child {\n    border-right: 2px solid grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbmg1IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEyMGRlZywgI2QzODMxMiwgI2E4MzI3OSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmNvbC1tZC02OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/catalogue/category-list/category-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/catalogue/category-list/category-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/catalogue/category-list/category.service.ts");



let CategoryListComponent = class CategoryListComponent {
    constructor(category_service) {
        this.category_service = category_service;
    }
    ngOnInit() {
        this.categories = this.category_service.getCategories();
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-list/category-list.component.html"),
        styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/catalogue/category-list/category-list.component.css")]
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/catalogue/category-list/category.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/catalogue/category-list/category.service.ts ***!
  \*************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.storageName = 'categories';
        this.baseUrl = "https://product-catalaog-api-spring.herokuapp.com/api/";
        this.showCategoryForm = false;
        this.emitCategory = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.displayMessage = false;
    }
    getCategories() {
        this.categories = this.getFromStorage(this.storageName);
        this.http
            .get(this.baseUrl + "category")
            .subscribe((categories) => {
            this.categories = categories;
            this.setToStorage(this.storageName, this.categories);
        });
        return this.categories;
    }
    setToStorage(storageName, storageList) {
        localStorage.setItem(storageName, JSON.stringify(storageList));
    }
    getFromStorage(storageName) {
        let localStorageItem = JSON.parse(localStorage.getItem(storageName));
        return localStorageItem == null ? [] : localStorageItem;
    }
    getCategory(id) {
        return this.http.get(this.baseUrl + "category/" + id);
    }
    createNewCategory(category) {
        console.log("Newly Added Category: " + category);
        return this.http.post(this.baseUrl + "category", category);
    }
    deleteCategory(id) {
        return this.http.delete(this.baseUrl + "category/" + id);
    }
    updateCategory(id, category) {
        return this.http.put(this.baseUrl + "category/" + id, category);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], CategoryService);



/***/ }),

/***/ "./src/app/catalogue/category-startup/category-startup.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/catalogue/category-startup/category-startup.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRlZ29yeS1zdGFydHVwL2NhdGVnb3J5LXN0YXJ0dXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/catalogue/category-startup/category-startup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/catalogue/category-startup/category-startup.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryStartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStartupComponent", function() { return CategoryStartupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryStartupComponent = class CategoryStartupComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryStartupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-startup',
        template: __webpack_require__(/*! raw-loader!./category-startup.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/category-startup/category-startup.component.html"),
        styles: [__webpack_require__(/*! ./category-startup.component.css */ "./src/app/catalogue/category-startup/category-startup.component.css")]
    })
], CategoryStartupComponent);



/***/ }),

/***/ "./src/app/catalogue/edit-category/edit-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/catalogue/edit-category/edit-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9lZGl0LWNhdGVnb3J5L2VkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/catalogue/edit-category/edit-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/catalogue/edit-category/edit-category.component.ts ***!
  \********************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-list/category.service */ "./src/app/catalogue/category-list/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditCategoryComponent = class EditCategoryComponent {
    constructor(category_service, form_builder, route) {
        this.category_service = category_service;
        this.form_builder = form_builder;
        this.route = route;
        this.category = {};
    }
    onSubmit() {
        if (this.editMode) {
            this.category_service.updateCategory(this.category.categoryid, this.addForm.value).subscribe((data) => {
            }, error => {
                alert(error);
            }, () => {
                setTimeout(() => {
                    this.category_service.displayMessage = true;
                    this.uniqueMessageText = 'Updated';
                }, 1500);
            });
        }
        if (!this.editMode) {
            this.category_service.createNewCategory(this.addForm.value)
                .subscribe(data => {
                console.log("Form's value: " + this.addForm.value);
            }, error => {
            }, () => {
                setTimeout(() => {
                    this.category_service.displayMessage = true;
                    this.uniqueMessageText = 'Added';
                }, 1500);
            });
        }
    }
    ngOnInit() {
        //initialize form fields
        this.addForm = this.form_builder.group({
            categoryname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        //check if form is in editMode or addMode
        this.route.params.subscribe((params) => {
            this.editMode = params['id'] != null;
            if (this.editMode) {
                this.category_service.getCategory(+params['id']).subscribe((category) => {
                    this.category = category;
                    this.addForm = this.form_builder.group({
                        categoryname: [this.category.categoryname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                });
            }
        });
    }
    ngOnDestroy() {
        this.category_service.displayMessage = false;
    }
};
EditCategoryComponent.ctorParameters = () => [
    { type: _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category',
        template: __webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/edit-category/edit-category.component.html"),
        styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/catalogue/edit-category/edit-category.component.css")]
    })
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/catalogue/edit-product/edit-product.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/catalogue/edit-product/edit-product.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n    background-image: linear-gradient(-120deg, #d38312, #a83279);\n    color: white;\n}\nlabel {\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDREQUE0RDtJQUM1RCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jYXRhbG9ndWUvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTIwZGVnLCAjZDM4MzEyLCAjYTgzMjc5KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/catalogue/edit-product/edit-product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/catalogue/edit-product/edit-product.component.ts ***!
  \******************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-list/product.service */ "./src/app/catalogue/product-list/product.service.ts");
/* harmony import */ var _category_list_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-list/category.service */ "./src/app/catalogue/category-list/category.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let EditProductComponent = class EditProductComponent {
    constructor(route, product_service, category_service, http) {
        this.route = route;
        this.product_service = product_service;
        this.category_service = category_service;
        this.http = http;
        this.imageUrl = "/assets/images/smiley.png";
        this.fileToUpload = null;
        this.editMode = false;
        this.product = {};
        this.product_category = {};
        this.SERVER_URL = "https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" +
            this.product.productid;
        this.categories = this.category_service.getCategories();
        //for reactive form: to initialize input field
        //  this.addForm.controls.categoryname.patchValue(this.categories[0].categoryname);
        this.product_category = this.categories[0];
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        //show image preview here
        var reader = new FileReader();
        reader.onload = (event) => {
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
    onSubmit(addForm) {
        if (this.editMode) {
            this.product_service
                .updateProduct(this.product_category.categoryid, this.product.productid, addForm.value)
                .subscribe((data) => { }, error => {
                alert(error);
            }, () => {
                setTimeout(() => {
                    this.category_service.displayMessage = true;
                    //this.uniqueMessageText = 'Updated';
                }, 1500);
            });
            console.log("ProductID is: " + this.product.productid);
            const formData = new FormData();
            formData.append("file", this.fileToUpload);
            this.http
                .post("https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" +
                this.product.productid, formData)
                .subscribe(res => console.log(res), err => console.log(err));
        }
        else {
            this.product_service
                .createProduct(this.product_category.categoryid, addForm.value)
                .subscribe(data => {
                console.log(data);
            });
            let last = this.product_service.getProducts()[this.product_service.getProducts().length - 1];
            const formData = new FormData();
            formData.append("file", this.fileToUpload);
            this.http
                .post("https://product-catalaog-api-spring.herokuapp.com/api/uploadFile/" + (last.productid + 1), formData)
                .subscribe(res => console.log(res), err => console.log(err));
        }
    }
    ngOnInit() {
        //check if form is in editMode or addMode
        this.route.params.subscribe((params) => {
            this.editMode = params["id"] != null;
            if (this.editMode) {
                this.product_service
                    .getProduct(+params["id"])
                    .subscribe((product) => {
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
};
EditProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _product_list_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _category_list_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-product",
        template: __webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/edit-product/edit-product.component.html"),
        styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/catalogue/edit-product/edit-product.component.css")]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/catalogue/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/catalogue/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: rgba(20, 13, 20, 1);\n    text-transform: uppercase;\n    letter-spacing: 0.15rem;\n    font-size: 14px;\n}\n.navbar-brand {\n    font-weight: bold;\n    border-left: 2px solid #fbb02d; \n    padding: 0 5px;\n}\na {\n    color: rgba(255, 255, 255, 0.9) !important;\n    cursor: pointer;\n}\na:hover, .active {\n    color: #fbb02d !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxMywgMjAsIDEpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmJiMDJkOyBcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbmEge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hOmhvdmVyLCAuYWN0aXZlIHtcbiAgICBjb2xvcjogI2ZiYjAyZCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/catalogue/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/catalogue/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/catalogue/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/catalogue/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/catalogue/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand {\n    font-family: 'Mansalva', cursive;\n    font-family: 'Pacifico', cursive;\n    font-size: 3rem;\n    color: #d38312;\n    height: 30px;\n}\n#banner-img {\n    background: url('/assets/images/heels.jpeg') no-repeat center;\n    background-size: cover;\n}\n#banner-img2 {\n    background: url('/assets/images/nike.jpeg') no-repeat center;\n    background-size: cover;\n}\n.col-md-7 {\n    padding: 200px;\n}\n.btn {\n    color: rgba(20, 13, 20, 1);\n    border-color: rgba(20, 13, 20, 1);\n    background: transparent;\n    transition: 0.6s all;\n}\n.btn:hover {\n    background: white;\n    border-color: #d38312;\n}\n.col-md-6 {\n    padding: 150px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDZEQUE2RDtJQUM3RCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDREQUE0RDtJQUM1RCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2F0YWxvZ3VlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kIHtcbiAgICBmb250LWZhbWlseTogJ01hbnNhbHZhJywgY3Vyc2l2ZTtcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICNkMzgzMTI7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuI2Jhbm5lci1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGVlbHMuanBlZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNiYW5uZXItaW1nMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9uaWtlLmpwZWcnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29sLW1kLTcge1xuICAgIHBhZGRpbmc6IDIwMHB4O1xufVxuLmJ0biB7XG4gICAgY29sb3I6IHJnYmEoMjAsIDEzLCAyMCwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwLCAxMywgMjAsIDEpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IDAuNnMgYWxsO1xufVxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDM4MzEyO1xufVxuLmNvbC1tZC02IHtcbiAgICBwYWRkaW5nOiAxNTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/catalogue/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/catalogue/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/catalogue/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/catalogue/page-not-found/page-not-found.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/catalogue/page-not-found/page-not-found.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/catalogue/page-not-found/page-not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/catalogue/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/catalogue/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/catalogue/product-detail/product-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/catalogue/product-detail/product-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    box-shadow: 0 0 10px grey;\n    border-radius: 5px;\n}\n.col-md-7 {\n    border-left: 2px solid #fbb02d;\n    letter-spacing: 0.16rem;\n    font-size: 14px;\n    line-height: 1.5rem;\n}\n.col-md-7 span {\n    font-weight: bold;\n}\n.big-text {\n    font-size: 30px;\n}\np {\n    padding-bottom: 10px;\n}\n.btn {\n    background-color: rgb(168, 50, 121);\n    border: none;\n    color: white;\n}\n.btn:hover {\n    background-color: #7B2559;\n}\n.btn:focus, .btn:active {\n    box-shadow: none !important;\n    outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbC1tZC03IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmYmIwMmQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTZyZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4uY29sLW1kLTcgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmlnLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbnAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgNTAsIDEyMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QjI1NTk7XG59XG4uYnRuOmZvY3VzLCAuYnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/catalogue/product-detail/product-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/catalogue/product-detail/product-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-list/product.service */ "./src/app/catalogue/product-list/product.service.ts");




let ProductDetailComponent = class ProductDetailComponent {
    constructor(route, product_service, router) {
        this.route = route;
        this.product_service = product_service;
        this.router = router;
        this.product = {
            category: {},
        };
    }
    goBack() {
        this.product_service.viewDetails = false;
        this.router.navigate(['/products']);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.product_service.getProduct(+params['id']).subscribe((product) => {
                this.product = product;
                console.log(this.product);
            });
        });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _product_list_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/catalogue/product-detail/product-detail.component.css")]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/catalogue/product-list/product-item/product-item.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/catalogue/product-list/product-item/product-item.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n    background-color: #a83279;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgzMjc5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/catalogue/product-list/product-item/product-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/catalogue/product-list/product-item/product-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/catalogue/product-list/product.service.ts");



let ProductItemComponent = class ProductItemComponent {
    constructor(product_service) {
        this.product_service = product_service;
    }
    onEdit() {
        console.log("To edit");
    }
    onDelete(product) {
        this.product_service.deleteProduct(product.productid).subscribe(data => {
            this.productList = this.productList.filter(p => p !== product);
        });
    }
    ngOnInit() {
    }
    search() {
        if (this.productname != "") {
            this.productList = this.productList.filter(res => {
                return res.productname.toLocaleLowerCase().match(this.productname.toLocaleLowerCase());
            });
        }
        else if (this.productname = "") {
            this.ngOnInit();
        }
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "productList", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: __webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-list/product-item/product-item.component.html"),
        styles: [__webpack_require__(/*! ./product-item.component.css */ "./src/app/catalogue/product-list/product-item/product-item.component.css")]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/catalogue/product-list/product-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/catalogue/product-list/product-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n    background-image: linear-gradient(-120deg, #d38312, #a83279);\n    color: white;\n}\ninput {\n    border: none;\n    border-radius: 0;\n    border-bottom: 2px solid grey;\n}\ninput:focus, input:active {\n    box-shadow: none;\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDREQUE0RDtJQUM1RCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYXRhbG9ndWUvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTIwZGVnLCAjZDM4MzEyLCAjYTgzMjc5KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG59XG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/catalogue/product-list/product-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/catalogue/product-list/product-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/catalogue/product-list/product.service.ts");



let ProductListComponent = class ProductListComponent {
    constructor(product_service) {
        this.product_service = product_service;
    }
    ngOnInit() {
        this.product_service.viewDetails = false;
        this.products = this.product_service.getProducts();
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/catalogue/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/catalogue/product-list/product-list.component.css")]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/catalogue/product-list/product.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/catalogue/product-list/product.service.ts ***!
  \***********************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-list/category.service */ "./src/app/catalogue/category-list/category.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProductService = class ProductService {
    constructor(category_service, http) {
        this.category_service = category_service;
        this.http = http;
        this.storageName = "products";
        this.viewDetails = false;
    }
    getProducts() {
        this.products = this.category_service.getFromStorage(this.storageName);
        this.http
            .get(this.category_service.baseUrl + "products")
            .subscribe((products) => {
            this.products = products;
            this.category_service.setToStorage(this.storageName, this.products);
        });
        return this.products;
    }
    getProduct(id) {
        return this.http.get(this.category_service.baseUrl + "products/" + id);
    }
    deleteProduct(id) {
        return this.http.delete(this.category_service.baseUrl + "products/" + id);
    }
    createProduct(category_id, product) {
        return this.http.post(this.category_service.baseUrl + "products/category/" + category_id, product);
    }
    updateProduct(category_id, product_id, product) {
        return this.http.put(this.category_service.baseUrl +
            "products/" +
            product_id +
            "/category/" +
            category_id, product);
    }
    uploadImage(productid, product) {
        return this.http.post(this.category_service.baseUrl + "uploadFile/" + productid, product);
    }
};
ProductService.ctorParameters = () => [
    { type: _category_list_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], ProductService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/audrey/Desktop/ANGULAR/product-catalogue/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map