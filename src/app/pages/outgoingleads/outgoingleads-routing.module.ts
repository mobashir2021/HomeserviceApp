import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutgoingleadsPage } from './outgoingleads.page';

const routes: Routes = [
  {
    path: '',
    component: OutgoingleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutgoingleadsPageRoutingModule {}
