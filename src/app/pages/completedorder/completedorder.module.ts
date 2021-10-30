import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedorderPageRoutingModule } from './completedorder-routing.module';

import { CompletedorderPage } from './completedorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedorderPageRoutingModule
  ],
  declarations: [CompletedorderPage]
})
export class CompletedorderPageModule {}
