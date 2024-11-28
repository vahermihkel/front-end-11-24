import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { TootajadComponent } from './tootajad/tootajad.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { NotFoundComponent } from './not-found/not-found.component';

// path --> mis järgneb localhost:4200-le
// component --> millist faili näidatakse

// localhost:4200     Home lehte
// localhost:4200/cart     Cart lehte
// jne

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "maintain-products", component: MaintainProductsComponent},
  {path: "gift-cards", component: GiftCardsComponent},
  {path: "tootajad", component: TootajadComponent},
  {path: "esindused", component: EsindusedComponent},
  {path: "**", component: NotFoundComponent}
];
