import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationcustomerPage } from './notificationcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationcustomerPageRoutingModule {}
