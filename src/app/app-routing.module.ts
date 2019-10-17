import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './catalogue/home/home.component';
import { ProductListComponent } from './catalogue/product-list/product-list.component';
import { PageNotFoundComponent } from './catalogue/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalogue/product-detail/product-detail.component';
import { EditProductComponent } from './catalogue/edit-product/edit-product.component';
import { CategoryDetailComponent } from './catalogue/category-detail/category-detail.component';
import { EditCategoryComponent } from './catalogue/edit-category/edit-category.component';
import { CategoryListComponent } from './catalogue/category-list/category-list.component';
import { CategoryStartupComponent } from './catalogue/category-startup/category-startup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductListComponent, children: [
    ]
  },
  { path: 'products/new', component: EditProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: EditProductComponent },
  {
    path: 'categories', component: CategoryListComponent, children: [
      { path: '', component: CategoryStartupComponent },
      { path: 'new', component: EditCategoryComponent },
      { path: ':id', component: CategoryDetailComponent },
      { path: ':id/edit', component: EditCategoryComponent },
    ]
  }, { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
