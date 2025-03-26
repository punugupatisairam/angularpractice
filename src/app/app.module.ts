import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipePipe } from './custompipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './modules/basics_route-etc/header/header.component';
import { AboutComponent } from './modules/basics_route-etc/about/about.component';
import { ContactComponent } from './modules/basics_route-etc/contact/contact.component';
import { HomeComponent } from './modules/basics_route-etc/home/home.component';
import { TopService } from './top.service';
import { UserComponent } from './modules/routing_params/user/user.component';
import { UsercardComponent } from './modules/routing_params/usercard/usercard.component';
import { ProductsComponent } from './modules/query_params/products/products.component';
import { ProductheaderComponent } from './modules/query_params/productheader/productheader.component';
import { HeadComponent } from './modules/child routing/head/head.component';
import { Child1Component } from './modules/child routing/child1/child1.component';
import { LoginComponent } from './modules/routeguards/login/login.component';
import { DashboardComponent } from './modules/routeguards/dashboard/dashboard.component';
import { LoginService } from './modules/routeguards/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    UsercardComponent,
    ProductsComponent,
    ProductheaderComponent,
    HeadComponent,
    Child1Component,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TopService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
