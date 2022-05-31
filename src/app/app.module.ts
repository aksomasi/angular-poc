import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SalesUseComponent } from './sales-use/sales-use.component';
import { HeaderComponent } from './header/header.component';
import { CalComponent } from './cal/cal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { AgeComponent } from './age/age.component';
import { CalResultComponent } from './cal-result/cal-result.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PerformanceTestComponent } from './performance-test/performance-test.component';
import {HttpClientModule} from "@angular/common/http";
import {LowerCasePipe, TitleCasePipe} from "@angular/common";
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SalesUseComponent,
    HeaderComponent,
    CalComponent,
    FooterComponent,
    AgeComponent,
    CalResultComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PerformanceTestComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TitleCasePipe, LowerCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
