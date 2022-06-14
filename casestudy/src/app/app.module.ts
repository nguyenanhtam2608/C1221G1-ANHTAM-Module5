import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerListComponent} from './Customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './Customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './Customer/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ModalComponent} from './modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteCustomerComponent } from './modal/delete-customer/delete-customer.component';
import { DeleteFacilityComponent } from './modal/delete-facility/delete-facility.component';
import { DeleteContractComponent } from './modal/delete-contract/delete-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    ModalComponent,
    DeleteCustomerComponent,
    DeleteFacilityComponent,
    DeleteContractComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
