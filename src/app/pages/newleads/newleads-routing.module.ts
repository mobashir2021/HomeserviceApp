import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewleadsPage } from './newleads.page';

const routes: Routes = [
  {
    path: '',
    component: NewleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewleadsPageRoutingModule {}
