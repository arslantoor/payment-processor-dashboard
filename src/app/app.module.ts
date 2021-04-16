import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignComponent } from './components/sign/sign.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductsComponent } from './components/products/products.component';
import { PaymentProcessorComponent } from './payment-processor/payment-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainComponent,
    DashboardComponent,
    UserComponent,
    SignupComponent,
    SignInComponent,
    SignComponent,
    ProductsComponent,
    PaymentProcessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
