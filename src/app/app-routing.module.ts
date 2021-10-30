import { NotificationPageModule } from './pages/notification/notification.module';
import { NotificationPage } from './pages/notification/notification.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {  } from "./pages/newleads/newleads.page";
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./partnerhome/partnerhome.module').then(m => m.PartnerhomePageModule)
  },
  {
    path: 'customerhome',
    loadChildren: () => import('./customerhome/customerhome.module').then( m => m.CustomerhomePageModule)
  },
  {
    path: 'customerhomepage',
    loadChildren: () => import('./pages/customerhomepage/customerhomepage.module').then( m => m.CustomerhomepagePageModule)
  },
  {
    path: 'signupoptions',
    loadChildren: () => import('./pages/signupoptions/signupoptions.module').then( m => m.SignupoptionsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
