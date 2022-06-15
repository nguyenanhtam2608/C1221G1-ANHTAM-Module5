import { NgModule } from '@angular/core';
import {ContractListComponent} from '../contract-list/contract-list.component';
import {ContractCreateComponent} from '../contract-create/contract-create.component';
import {ContractRoutingModule} from './contract-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent],
  imports: [
    CommonModule,
    ContractRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContractModule { }
