import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerhomePage } from './partnerhome.page';

const routes: Routes = [
  {
    path: 'partnerhome',
    component: PartnerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerhomePageRoutingModule {}
