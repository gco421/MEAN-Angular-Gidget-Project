import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { Under20Component } from './under20/under20.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CkoutnavComponent } from './ckoutnav/ckoutnav.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { ToolsComponent } from './tools/tools.component';
import { SolarComponent } from './solar/solar.component';
import { WindupComponent } from './windup/windup.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gidget' },
  { path: 'gidget', component: MainnavComponent, children:
  [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
     {path: 'main', component: HomeComponent},
     {path: 'new', component: NewComponent} , {path: 'U20', component: Under20Component}, {path: 'bestsellers', component: BestsellersComponent},
     {path: 'tools', component: ToolsComponent} , {path: 'solar', component: SolarComponent}, {path: 'windup', component: WindupComponent}, {path: 'addProduct', component: AddProductComponent}
  ] },
  { path: 'checkout', component:CkoutnavComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'cart' },
    {path: 'cart', component: CartComponent}] }
  ]

  // { path: 'gidget/new', component: NewComponent },
  // { path: 'gidget/U20', component: Under20Component },
  // { path: 'gidget/bestsellers', component: BestsellersComponent},
  // { path: 'gidget/cart', component: CartComponent}];

//   { path: 'reviews', component: ReviewComponent, children: [
//     { path: 'details/:id', component: ReviewDetailComponent },
//     { path: 'author/:id', component: AuthorComponent },
//     { path: 'all/:id', component: AllreviewsComponent }]
// }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
