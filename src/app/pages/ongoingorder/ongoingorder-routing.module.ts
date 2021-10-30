import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingorderPage } from './ongoingorder.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingorderPageRoutingModule {}
