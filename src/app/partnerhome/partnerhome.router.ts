import { NotificationPageModule } from './../pages/notification/notification.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerhomePage } from './partnerhome.page';


const routes: Routes = [
  {
    path: 'partnerhome',
    component: PartnerhomePage,
    children:[
      {
      path:'',
      loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path:'feed',
        loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
        }
        ,
      {
        path:'notification',
        loadChildren: () => import('../pages/notification/notification.module').then(m => m.NotificationPageModule)
        }
      ,
      {
        path: 'newleads',
        loadChildren: () => import('../pages/newleads/newleads.module').then( m => m.NewleadsPageModule)
      },
      {
        path: 'outgoingleads',
        loadChildren: () => import('../pages/outgoingleads/outgoingleads.module').then( m => m.OutgoingleadsPageModule)
      },
      {
        path: 'deniedleads',
        loadChildren: () => import('../pages/deniedleads/deniedleads.module').then( m => m.DeniedleadsPageModule)
      },
      {
        path: 'completedleads',
        loadChildren: () => import('../pages/completedleads/completedleads.module').then( m => m.CompletedleadsPageModule)
      },
      {
        path: 'complaint',
        loadChildren: () => import('../pages/complaint/complaint.module').then( m => m.ComplaintPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../pages/products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'newleadaccept',
        loadChildren: () => import('../pages/newleadaccept/newleadaccept.module').then( m => m.NewleadacceptPageModule)
      },
      {
        path: 'leaddetails',
        loadChildren: () => import('../pages/leaddetails/leaddetails.module').then( m => m.LeaddetailsPageModule)
      },
      {
        path: 'ongoingleaddetails',
        loadChildren: () => import('../pages/ongoingleaddetails/ongoingleaddetails.module').then( m => m.OngoingleaddetailsPageModule)
      },
      {
        path: 'accept-customer',
        loadChildren: () => import('../pages/accept-customer/accept-customer.module').then( m => m.AcceptCustomerPageModule)
      }
  ]
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PartnerHomeRouter {}