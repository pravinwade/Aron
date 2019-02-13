import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FixturesComponent } from './fixtures/fixtures.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: 'PO', component: PurchaseOrderComponent },
      { path: 'Inventory', component: InventoryComponent },
      { path: 'Fixtures', component: FixturesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
