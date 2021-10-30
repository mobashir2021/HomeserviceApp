import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController, IonDatetime } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {format} from "date-fns";


@Component({
  selector: 'app-newleadaccept',
  templateUrl: './newleadaccept.page.html',
  styleUrls: ['./newleadaccept.page.scss'],
})
export class NewleadacceptPage implements OnInit {

  CustomerAddress: string;
  Service: string;
  CreditUsed: number;
  Remarks: string;
  City: string;
  OrderId: number;
  Partnerid: number;
  Balance: number;
  //apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/AcceptOrder/';
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/AcceptOrder';
  items: any;
  result : JSON;
  pickDate: string = new Date().toISOString();
  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController) { 
    this.route.queryParams.subscribe(params => {
      this.CustomerAddress = params["CustomerAddress"];
      this.Service = params["Service"];
      //this.CreditUsed = params["CreditUsed"];
      this.Remarks = params["Remarks"];
      this.City = params["City"];
      this.OrderId = params["OrderId"];

      
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

  ngOnInit() {
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  AcceptOrder(){
    
    console.log(format(new Date(this.pickDate), "yyyy-MMM-dd"));
    console.log(format(new Date(this.pickDate), "HH:mm"));
        this.http.get(this.apiUrl,  {params : { LeadDetailid: this.OrderId.toString(), Partnerid: this.Partnerid.toString()
          , selectedDate: format(new Date(this.pickDate), "yyyy-MMM-dd").toString(),
          selectedTime : format(new Date(this.pickDate), "HH:mm").toString() } }).subscribe(
        res => {
          
  
          var itemstest = JSON.stringify(res);
          this.items = JSON.parse(itemstest);
          console.log(this.items);
          
          this.showToast('Order Sent for Customer Approval');
          this.navCtrl.navigateForward('/partnerhome');
  
          
        },
        err => {
          console.log(err);
        }
      );   
    
  }

  

}
