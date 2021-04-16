import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteWithData } from './core/interfaces/route-with-data.interface';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { PaymentProcessorComponent } from './payment-processor/payment-processor.component';


const routes: Routes = [
    {
      path: "",
      component: MainComponent,
      children: [
        {
          path:"dashboard",
          component: DashboardComponent
        }, {
          path:'products',
          component: ProductsComponent
        },
        {
          path:'payment-setting',
          component: PaymentProcessorComponent
        }
      ]

    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  }
