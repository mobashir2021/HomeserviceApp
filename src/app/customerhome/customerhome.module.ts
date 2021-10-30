import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerhomePageRoutingModule } from './customerhome-routing.module';

import { CustomerhomePage } from './customerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerhomePageRoutingModule
  ],
  declarations: [CustomerhomePage]
})
export class CustomerhomePageModule {}
