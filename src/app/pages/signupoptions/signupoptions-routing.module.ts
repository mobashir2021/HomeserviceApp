import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupoptionsPage } from './signupoptions.page';

const routes: Routes = [
  {
    path: '',
    component: SignupoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupoptionsPageRoutingModule {}
