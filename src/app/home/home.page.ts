import { NotificationPageModule } from './../pages/notification/notification.module';
import { NotificationPage } from './../pages/notification/notification.page';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, Platform } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  totalbadge: number;
  
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationCustomer';
  items: any;
  Custid: number;


  constructor(public navCtrl: NavController, private http: HttpClient, private plt: Platform, private storage: Storage
    , private router: Router) {
    this.totalbadge = 0;
    this.storage.get("CustomerId").then(data => {
      this.Custid = data as number;
    });
    setInterval(() => { 
      //console.log("Test Notification Set Interval");
      this.http.get(this.apiUrl, {params : { Customerid: this.Custid.toString()} }).subscribe(
        res => {
          var itemstest = JSON.stringify(res);
          this.items = JSON.parse(itemstest);
          this.totalbadge = this.items.length;
          //console.log("Test Notification");
          //console.log(this.items);

        },
        err => {
          console.log(err);
        }
      ); 
    }, 20000);
   }

  ngOnInit() {
  }

  notificationClick(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        itemsdata : this.items
      }
    };
    this.navCtrl.navigateForward(['/notification'], navigationExtras);
  }

  

  
}
