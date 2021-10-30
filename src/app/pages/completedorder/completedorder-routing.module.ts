import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedorderPage } from './completedorder.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedorderPageRoutingModule {}
