import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupoptionsPageRoutingModule } from './signupoptions-routing.module';

import { SignupoptionsPage } from './signupoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupoptionsPageRoutingModule
  ],
  declarations: [SignupoptionsPage]
})
export class SignupoptionsPageModule {}
