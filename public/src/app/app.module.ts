import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { Under20Component } from './under20/under20.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CkoutnavComponent } from './ckoutnav/ckoutnav.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { ToolsComponent } from './tools/tools.component';
import { SolarComponent } from './solar/solar.component';
import { WindupComponent } from './windup/windup.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    BestsellersComponent,
    Under20Component,
    HomeComponent,
    CartComponent,
    CkoutnavComponent,
    MainnavComponent,
    ToolsComponent,
    SolarComponent,
    WindupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
