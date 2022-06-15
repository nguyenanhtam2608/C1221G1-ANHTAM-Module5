import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FacilityListComponent} from '../facility-list/facility-list.component';
import {FacilityCreateComponent} from '../facility-create/facility-create.component';
import {FacilityEditComponent} from '../facility-edit/facility-edit.component';


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FacilityModule {
}
