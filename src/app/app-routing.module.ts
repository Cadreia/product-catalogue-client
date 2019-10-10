import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './catalogue/home/home.component';
import { ProductListComponent } from './catalogue/product-list/product-list.component';
import { CategoryListComponent } from './catalogue/category-list/category-list.component';
import { PageNotFoundComponent } from './catalogue/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalogue/product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent, children: [
    {path: ':id', component: ProductDetailComponent}
  ]},
  {path: 'categories', component: CategoryListComponent},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
