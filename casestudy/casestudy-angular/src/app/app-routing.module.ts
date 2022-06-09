import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CutomerListComponent} from './customer/cutomer-list/cutomer-list.component';
import {CutomerCreateComponent} from './customer/cutomer-create/cutomer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ServiceListComponent} from './service/service-list/service-list.component';
import {ServiceEditComponent} from './service/service-edit/service-edit.component';
import {ServiceCreateComponent} from './service/service-create/service-create.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';


const routes: Routes = [
  {path: 'customer-list', component: CutomerListComponent},
  {path: 'customer-create', component: CutomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'service-list', component: ServiceListComponent},
  {path: 'service-edit', component: ServiceEditComponent},
  {path: 'service-edit', component: ServiceCreateComponent},
  {path: 'contract-create', component: ContractCreateComponent},
  {path: 'contract-list', component: ContractListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
