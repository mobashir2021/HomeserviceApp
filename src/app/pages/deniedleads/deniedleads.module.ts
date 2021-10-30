import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeniedleadsPageRoutingModule } from './deniedleads-routing.module';

import { DeniedleadsPage } from './deniedleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeniedleadsPageRoutingModule
  ],
  declarations: [DeniedleadsPage]
})
export class DeniedleadsPageModule {}
