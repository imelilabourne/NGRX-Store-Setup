import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from '../customers/state/customer.reducer'
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
const customerRoutes: Routes = [{path: "", component: CustomerComponent}]


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(customerRoutes),
      StoreModule.forFeature("customers", customerReducer),
      EffectsModule.forFeature([CustomerEffect])
    ],
    declarations: [
      CustomerComponent,
      CustomerAddComponent,
      CustomerEditComponent,
      CustomerListComponent
    ]
  })
export class CustomersModule { }

export const routes = [
  CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent
]
