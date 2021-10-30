import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovePartnerPageRoutingModule } from './approve-partner-routing.module';

import { ApprovePartnerPage } from './approve-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovePartnerPageRoutingModule
  ],
  declarations: [ApprovePartnerPage]
})
export class ApprovePartnerPageModule {}
