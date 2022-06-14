import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './Customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './Customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './Customer/customer-create/customer-create.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {BodyComponent} from './body/body.component';
import {ModalComponent} from './modal/modal.component';
import {DeleteCustomerComponent} from './modal/delete-customer/delete-customer.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
  {path: 'contract-create', component: ContractCreateComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'delete-customer/:id', component: DeleteCustomerComponent},
  {path: 'modal', component: ModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
