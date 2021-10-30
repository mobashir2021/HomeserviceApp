import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-leaddetails',
  templateUrl: './leaddetails.page.html',
  styleUrls: ['./leaddetails.page.scss'],
})
export class LeaddetailsPage implements OnInit {

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
  items: any;
  result : JSON;
  Area: number;
  Status: string;

  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController) { 
      this.route.queryParams.subscribe(params => {
        this.CustomerAddress = params["CustomerAddress"];
        this.Service = params["Service"];
        this.Area = params["Area"];
        this.CreditUsed = params["CreditUsed"];
        this.Remarks = params["Remarks"];
        this.City = params["City"];
        this.OrderId = params["OrderId"];
        this.CustomerName = params["CustomerName"];
        this.CustomerPhoneNumber = params["CustomerPhoneNumber"];
        this.Status = params["Status"];
        
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

  GoToHome(){
    this.navCtrl.navigateRoot('/partnerhome');
  }

}
