import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ongoingleaddetails',
  templateUrl: './ongoingleaddetails.page.html',
  styleUrls: ['./ongoingleaddetails.page.scss'],
})
export class OngoingleaddetailsPage implements OnInit {

  CustomerAddress: string;
  Service: string;
  CreditUsed: number;
  Remarks: string;
  City: string;
  OrderId: number;
  Partnerid: number;
  Balance: number;
  CustomerName: string;
  CustomerPhoneNumber: string;
  Area: number;
  /* apiUrlComplete: string = 'http://www.fjfgroups.com/api/LeadApi/CompleteOrder/';
  apiUrlDecline: string = 'http://www.fjfgroups.com/api/LeadApi/DeniedOrder/'; */
  apiUrlComplete: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/CompleteOrder';
  apiUrlDecline: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/DeniedOrder';
  items: any;
  result : JSON;
  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController) { 
      this.route.queryParams.subscribe(params => {
        this.Area = params["Area"];
        this.Service = params["Service"];
        this.CustomerAddress = params["CustomerAddress"];
        this.Remarks = params["Remarks"];
        this.City = params["City"];

        this.OrderId = params["OrderId"];
        this.CustomerName = params["CustomerName"];
        this.CustomerPhoneNumber = params["CustomerPhoneNumber"];
        
    });
    this.plt.ready().then(() => {
      this.storage.get("Partnerid").then(data => {
        this.Partnerid = data as number;
      });
      /* this.storage.get("Balance").then(data => {
        this.Balance = data as number;
      }); */
    });

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  DeclineOrder(){
    
      this.http.get(this.apiUrlDecline,  {params : { LeadDetailid: this.OrderId.toString(), Partnerid: this.Partnerid.toString()} }).subscribe(
        res => {
          
  
          var itemstest = JSON.stringify(res);
          this.items = JSON.parse(itemstest);
          console.log(this.items);
          
          this.showToast('Order declined');
          this.navCtrl.navigateForward('/partnerhome');
  
          
        },
        err => {
          console.log(err);
        }
      ); 
    
  }

  CompleteOrder(){
    
      this.http.get(this.apiUrlComplete,  {params : { LeadDetailid: this.OrderId.toString(), Partnerid: this.Partnerid.toString()} }).subscribe(
        res => {
          
  
          var itemstest = JSON.stringify(res);
          this.items = JSON.parse(itemstest);
          console.log(this.items);
          
          this.showToast('Order Completed');
          this.navCtrl.navigateForward('/partnerhome');
  
          
        },
        err => {
          console.log(err);
        }
      ); 
    }
  

}
