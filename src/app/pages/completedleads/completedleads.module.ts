import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedleadsPageRoutingModule } from './completedleads-routing.module';

import { CompletedleadsPage } from './completedleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedleadsPageRoutingModule
  ],
  declarations: [CompletedleadsPage]
})
export class CompletedleadsPageModule {}
