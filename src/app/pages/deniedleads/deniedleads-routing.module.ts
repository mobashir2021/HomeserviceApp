import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeniedleadsPage } from './deniedleads.page';

const routes: Routes = [
  {
    path: '',
    component: DeniedleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeniedleadsPageRoutingModule {}
