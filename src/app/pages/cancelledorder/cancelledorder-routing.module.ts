import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelledorderPage } from './cancelledorder.page';

const routes: Routes = [
  {
    path: '',
    component: CancelledorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelledorderPageRoutingModule {}
