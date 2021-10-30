import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovePartnerPage } from './approve-partner.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovePartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovePartnerPageRoutingModule {}
