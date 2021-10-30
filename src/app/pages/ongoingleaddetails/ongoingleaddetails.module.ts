import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingleaddetailsPageRoutingModule } from './ongoingleaddetails-routing.module';

import { OngoingleaddetailsPage } from './ongoingleaddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingleaddetailsPageRoutingModule
  ],
  declarations: [OngoingleaddetailsPage]
})
export class OngoingleaddetailsPageModule {}
