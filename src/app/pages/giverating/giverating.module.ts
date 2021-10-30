import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveratingPageRoutingModule } from './giverating-routing.module';

import { GiveratingPage } from './giverating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiveratingPageRoutingModule
  ],
  declarations: [GiveratingPage]
})
export class GiveratingPageModule {}
