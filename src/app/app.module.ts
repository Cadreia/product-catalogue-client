import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CategoryListComponent } from './catalogue/category-list/category-list.component';
import { ProductListComponent } from './catalogue/product-list/product-list.component';
import { ProductItemComponent } from './catalogue/product-list/product-item/product-item.component';
import { CategoryItemComponent } from './catalogue/category-list/category-item/category-item.component';
import { HomeComponent } from './catalogue/home/home.component';
import { HeaderComponent } from './catalogue/header/header.component';
import { PageNotFoundComponent } from './catalogue/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalogue/product-detail/product-detail.component';
import { EditProductComponent } from './catalogue/edit-product/edit-product.component';
import { EditCategoryComponent } from './catalogue/edit-category/edit-category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailComponent } from './catalogue/category-detail/category-detail.component';
import { CategoryStartupComponent } from './catalogue/category-startup/category-startup.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    EditProductComponent,
    EditCategoryComponent,
    CategoryDetailComponent,
    CategoryStartupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
