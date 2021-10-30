import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewleadacceptPageRoutingModule } from './newleadaccept-routing.module';

import { NewleadacceptPage } from './newleadaccept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewleadacceptPageRoutingModule
  ],
  declarations: [NewleadacceptPage]
})
export class NewleadacceptPageModule {}
