import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
