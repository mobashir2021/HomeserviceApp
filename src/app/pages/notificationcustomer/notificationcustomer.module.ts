import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationcustomerPageRoutingModule } from './notificationcustomer-routing.module';

import { NotificationcustomerPage } from './notificationcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationcustomerPageRoutingModule
  ],
  declarations: [NotificationcustomerPage]
})
export class NotificationcustomerPageModule {}
