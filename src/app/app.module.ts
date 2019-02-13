import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_Services/login.service';
import { HomeComponent } from './home/home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { Login } from './_Modals/login';
import { Fixtures } from './_Modals/Fixtures';
import { PO } from './_Modals/PO';
import { Parts } from './_Modals/parts';
import { FixturesService } from './_Services/fixtures.service';
import { PartsService } from './_Services/parts.service';
import { POService } from './_Services/po.service';
import { YYYYMMDD } from './_Modals/yyyymmdd';
import { YYYYMMDDPipe } from './_Pipes/yyyymmdd.pipe';
import { PagerService } from './_Services/_Pager/pager.service';

@NgModule({
  declarations: [
    YYYYMMDDPipe,
    AppComponent,
    LoginComponent,
    HomeComponent,
    PurchaseOrderComponent,
    InventoryComponent,
    FixturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    //classes
    Login,
    PO,
    Fixtures,
    Parts,
    
    //services
    LoginService,
    FixturesService,
    PartsService,
    POService,
    PagerService,

    //pipe
    YYYYMMDD
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
