import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerhomePage } from './customerhome.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerhomePageRoutingModule {}
