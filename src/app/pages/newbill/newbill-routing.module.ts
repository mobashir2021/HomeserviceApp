import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewbillPage } from './newbill.page';

const routes: Routes = [
  {
    path: '',
    component: NewbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewbillPageRoutingModule {}
