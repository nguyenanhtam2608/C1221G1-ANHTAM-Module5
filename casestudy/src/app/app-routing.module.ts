import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BodyComponent} from './body/body.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {
    path: 'customer',
    loadChildren: () => import('./Customer/customer/customer.module').then(module => module.CustomerModule)
  },
  // {path: 'customer-list', component: CustomerListComponent},
  // {path: 'customer-create', component: CustomerCreateComponent},
  // {path: 'customer-edit/:id', component: CustomerEditComponent},
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract/contract.module').then(module => module.ContractModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
