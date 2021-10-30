import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutgoingleadsPageRoutingModule } from './outgoingleads-routing.module';

import { OutgoingleadsPage } from './outgoingleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutgoingleadsPageRoutingModule
  ],
  declarations: [OutgoingleadsPage]
})
export class OutgoingleadsPageModule {}
