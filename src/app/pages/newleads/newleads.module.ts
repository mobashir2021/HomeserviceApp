import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewleadsPageRoutingModule } from './newleads-routing.module';

import { NewleadsPage } from './newleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewleadsPageRoutingModule
  ],
  declarations: [NewleadsPage]
})
export class NewleadsPageModule {}
