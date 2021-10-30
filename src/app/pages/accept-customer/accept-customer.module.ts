import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptCustomerPageRoutingModule } from './accept-customer-routing.module';

import { AcceptCustomerPage } from './accept-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptCustomerPageRoutingModule
  ],
  declarations: [AcceptCustomerPage]
})
export class AcceptCustomerPageModule {}
