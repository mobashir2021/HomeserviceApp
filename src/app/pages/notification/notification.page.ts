import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {


  Partnerid: number;
  Customerid: number;
  Usertype: string;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationPartner';
  apiUrlCust: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationCustomer';
  items: any;
  Partid: number;

  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController,  private router: Router) { 
      /* this.route.queryParams.subscribe(params => {
        this.items = params["itemsdata"];
        
    }); */
    this.plt.ready().then(() => {
      this.storage.get("Usertype").then(data => {
        
        this.Usertype = data as string;
        if(this.Usertype == "Customer"){
          this.storage.get("Customerid").then(data => {
            this.Customerid = data as number;
            this.http.get(this.apiUrl, {params : { Customerid: this.Customerid.toString()} }).subscribe(
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
          this.storage.get("Partnerid").then(data => {
            this.Partid = data as number;
            this.http.get(this.apiUrl, {params : { Partnerid: this.Partid.toString()} }).subscribe(
              res => {
                var itemstest = JSON.stringify(res);
                this.items = JSON.parse(itemstest);
                //console.log("prof data");
                //console.log(this.items);
      
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

  navigateNewLead(OrderIdtemp){
    let filterResult : any = this.items.filter(u => u.OrderId == OrderIdtemp);
    if(filterResult[0].Notificationtype == "Approved"){
      
      let navigationExtras: NavigationExtras = {
        queryParams: {
          Customername : filterResult[0].Customername,
          Service: filterResult[0].Service,
          CustomerMobileno: filterResult[0].CustomerMobileno,
          AppointedDate: filterResult[0].AppointedDate,
          OrderId : filterResult[0].OrderId,
          CustomerId: filterResult[0].CustomerId

        }
      };
      this.navCtrl.navigateRoot(['/partnerhome/accept-customer'], navigationExtras);
    }else{
      this.navCtrl.navigateRoot(['/partnerhome/newleads']);
    }
    //this.navCtrl.navigateBack(['/newleads']);
  }

}
