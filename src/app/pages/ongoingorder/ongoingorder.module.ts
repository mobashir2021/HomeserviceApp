import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingorderPageRoutingModule } from './ongoingorder-routing.module';

import { OngoingorderPage } from './ongoingorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingorderPageRoutingModule
  ],
  declarations: [OngoingorderPage]
})
export class OngoingorderPageModule {}
