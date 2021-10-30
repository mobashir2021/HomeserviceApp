import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedleadsPage } from './completedleads.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedleadsPageRoutingModule {}
