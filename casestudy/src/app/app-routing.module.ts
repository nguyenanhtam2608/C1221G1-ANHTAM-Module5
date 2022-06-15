import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './Customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './Customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './Customer/customer-create/customer-create.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
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

  // {path: 'facility-list', component: FacilityListComponent},
  // {path: 'facility-create', component: FacilityCreateComponent},
  // {path: 'facility-edit/:id', component: FacilityEditComponent},

  {
    path: 'contract',
    loadChildren: () => import('./contract/contract/contract.module').then(module => module.ContractModule)
  },

  // {path: 'contract-create', component: ContractCreateComponent},
  // {path: 'contract-list', component: ContractListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
