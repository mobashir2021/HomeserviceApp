import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewleadacceptPage } from './newleadaccept.page';

const routes: Routes = [
  {
    path: '',
    component: NewleadacceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewleadacceptPageRoutingModule {}
