import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShopsComponent } from './shops/shops.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path: "shops", component: ShopsComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "product", component: SingleProductComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "admin", component: AdminHomeComponent},
  {path: "admin/add-product", component: AddProductComponent},
  {path: "admin/edit-product", component: EditProductComponent},
  {path: "admin/manage-categories", component: ManageCategoriesComponent},
  {path: "admin/manage-products", component: ManageProductsComponent},
  {path: "**", component: NotFoundComponent},
];
