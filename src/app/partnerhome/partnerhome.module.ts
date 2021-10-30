import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { PartnerhomePageRoutingModule } from './partnerhome-routing.module';
import { PartnerHomeRouter } from "./partnerhome.router";

import { PartnerhomePage } from './partnerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //PartnerhomePageRoutingModule
    PartnerHomeRouter
  ],
  declarations: [PartnerhomePage]
})
export class PartnerhomePageModule {}
