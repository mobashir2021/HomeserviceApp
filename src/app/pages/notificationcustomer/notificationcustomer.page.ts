import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-notificationcustomer',
  templateUrl: './notificationcustomer.page.html',
  styleUrls: ['./notificationcustomer.page.scss'],
})
export class NotificationcustomerPage implements OnInit {

  Partnerid: number;
  Customerid: number;
  Usertype: string;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationPartner';
  apiUrlCust: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationCustomer';
  items: any;
  Partid: number;

  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController,  private router: Router) {

      this.plt.ready().then(() => {
        this.storage.get("Usertype").then(data => {
          
          this.Usertype = data as string;
          
          if(this.Usertype == "Customer"){
            this.storage.get("CustomerId").then(data => {
              this.Customerid = data as number;
              this.http.get(this.apiUrlCust, {params : { Customerid: this.Customerid.toString()} }).subscribe(
                res => {
                  var itemstest = JSON.stringify(res);
                  this.items = JSON.parse(itemstest);
                  
                  console.log(this.items);
        
                },
                err => {
                  console.log(err);
                }
              ); 
            });
            
          }else if(this.Usertype == "Professional"){
            console.log("check here");
            this.storage.get("Partnerid").then(data => {
              this.Partid = data as number;
              this.http.get(this.apiUrl, {params : { Partnerid: this.Partid.toString()} }).subscribe(
                res => {
                  var itemstest = JSON.stringify(res);
                  this.items = JSON.parse(itemstest);
                  
                  console.log(this.items);
        
                },
                err => {
                  console.log(err);
                }
              );
            });
             
          }
        });
        
      });
      
      
  
      }
  
    ngOnInit() {
  
    }

    navigateNotification(OrderReqid){
      let filterResult : any = this.items.filter(u => u.OrderRequestid == OrderReqid);
      if(filterResult[0].Notificationtype == "Professional Approved Timings"){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            Partnername : filterResult[0].Partnername,
            Service: filterResult[0].Service,
            AppointedDate: filterResult[0].AppointedDate,
            OrderId : filterResult[0].OrderId,
            PartnerId: filterResult[0].PartnerId

          }
        };
        this.navCtrl.navigateRoot(['/home/approve-partner'], navigationExtras);
      }else if(filterResult[0].Notificationtype == "Approval Accepted"){
        this.navCtrl.navigateRoot(['/home']);
      }
      
    }

}
