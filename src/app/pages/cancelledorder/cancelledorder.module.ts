import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelledorderPageRoutingModule } from './cancelledorder-routing.module';

import { CancelledorderPage } from './cancelledorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelledorderPageRoutingModule
  ],
  declarations: [CancelledorderPage]
})
export class CancelledorderPageModule {}
