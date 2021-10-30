import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveratingPage } from './giverating.page';

const routes: Routes = [
  {
    path: '',
    component: GiveratingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveratingPageRoutingModule {}
