import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CalComponent} from "./cal/cal.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'cal', component: CalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
