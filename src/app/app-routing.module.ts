import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/basics_route-etc/about/about.component';
import { ContactComponent } from './modules/basics_route-etc/contact/contact.component';
import { HeaderComponent } from './modules/basics_route-etc/header/header.component';
import { HomeComponent } from './modules/basics_route-etc/home/home.component';
import { UserComponent } from './modules/routing_params/user/user.component';
import { UsercardComponent } from './modules/routing_params/usercard/usercard.component';
import { ProductsComponent } from './modules/query_params/products/products.component';
import { HeadComponent } from './modules/child routing/head/head.component';
import { Child1Component } from './modules/child routing/child1/child1.component';
import { DashboardComponent } from './modules/routeguards/dashboard/dashboard.component';
import { LoginService } from './modules/routeguards/login.service';
import { LoginComponent } from './modules/routeguards/login/login.component';
const routes: Routes = [
  {
    path:"",
    component:HeaderComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent,
    children:[
      {
        path:"head",component:HeadComponent
      },
      {
        path:"child1",component:Child1Component
      }
    ]
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"users",component:UserComponent
  },
  {
    path:"usercard/:id",component:UsercardComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"dashboard",component:DashboardComponent,canActivate:[LoginService] 
  },
  {
    path:"login",component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
