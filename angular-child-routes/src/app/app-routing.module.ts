import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecsComponent } from './components/product/specs/specs.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'specs', component: SpecsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
