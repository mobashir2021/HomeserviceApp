import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerhomepagePage } from './customerhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerhomepagePageRoutingModule {}
