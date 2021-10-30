import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingleaddetailsPage } from './ongoingleaddetails.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingleaddetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingleaddetailsPageRoutingModule {}
