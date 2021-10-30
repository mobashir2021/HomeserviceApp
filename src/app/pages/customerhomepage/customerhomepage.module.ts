import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerhomepagePageRoutingModule } from './customerhomepage-routing.module';

import { CustomerhomepagePage } from './customerhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerhomepagePageRoutingModule
  ],
  declarations: [CustomerhomepagePage]
})
export class CustomerhomepagePageModule {}
