import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {
      path:'',
      loadChildren: () => import('../pages/customerhomepage/customerhomepage.module').then(m => m.CustomerhomepagePageModule)
      },
      {
        path:'customerhomepage',
        loadChildren: () => import('../pages/customerhomepage/customerhomepage.module').then(m => m.CustomerhomepagePageModule)
        }
      ,
      
       {
      path:'notificationcustomer',
      loadChildren: () => import('../pages/notificationcustomer/notificationcustomer.module').then(m => m.NotificationcustomerPageModule)
      }, 
      {
        path:'messages',
        loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'subcategories',
        loadChildren: () => import('../pages/subcategories/subcategories.module').then( m => m.SubcategoriesPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule),
      },
      {
        path: 'neworder',
        loadChildren: () => import('../pages/neworder/neworder.module').then( m => m.NeworderPageModule)
      },
      {
        path: 'ongoingorder',
        loadChildren: () => import('../pages/ongoingorder/ongoingorder.module').then( m => m.OngoingorderPageModule)
      },
      {
        path: 'completedorder',
        loadChildren: () => import('../pages/completedorder/completedorder.module').then( m => m.CompletedorderPageModule)
      },
      {
        path: 'cancelledorder',
        loadChildren: () => import('../pages/cancelledorder/cancelledorder.module').then( m => m.CancelledorderPageModule)
      },
      {
        path: 'newbill',
        loadChildren: () => import('../pages/newbill/newbill.module').then( m => m.NewbillPageModule)
      },
      {
        path: 'viewbill',
        loadChildren: () => import('../pages/viewbill/viewbill.module').then( m => m.ViewbillPageModule)
      },
      {
        path: 'booknow',
        loadChildren: () => import('../pages/booknow/booknow.module').then( m => m.BooknowPageModule)
      },
      {
        path: 'approve-partner',
        loadChildren: () => import('../pages/approve-partner/approve-partner.module').then( m => m.ApprovePartnerPageModule)
      },
      {
        path: 'giverating',
        loadChildren: () => import('../pages/giverating/giverating.module').then( m => m.GiveratingPageModule)
      }
  ]
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRouter {}