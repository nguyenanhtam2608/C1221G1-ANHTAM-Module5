import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CutomerCreateComponent } from './customer/cutomer-create/cutomer-create.component';
import { CutomerListComponent } from './customer/cutomer-list/cutomer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ServiceEditComponent } from './service/service-edit/service-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CutomerCreateComponent,
    CutomerListComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
