import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-accept-customer',
  templateUrl: './accept-customer.page.html',
  styleUrls: ['./accept-customer.page.scss'],
})
export class AcceptCustomerPage implements OnInit {
  Partid: number;
  items: any;
  Customername : string;
  AppointedDate: string;
  Service: string;
  OrderId: number;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/AcceptRequest';


  constructor(private route: ActivatedRoute, private storage: Storage, private plt : Platform
    ,private toastController: ToastController, private http: HttpClient, private navCtrl: NavController,  private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.Customername = params["Customername"];
        this.Service = params["Service"];
        this.AppointedDate = params["AppointedDate"];
        this.OrderId = params["OrderId"];
        //this.Partid = params["PartnerId"];
        
    });
      
      this.plt.ready().then(() => {
         this.storage.get("Partnerid").then(data => {
          this.Partid = data as number;
        }); 
      });

   }

  ngOnInit() {
  }

  FinalAccept(){
    this.http.get(this.apiUrl, {params : { OrderId: this.OrderId.toString(), PartnerId: this.Partid.toString() } }).subscribe(
      res => {
        var itemstest = JSON.stringify(res);
        this.items = JSON.parse(itemstest);
        this.showToast("Service has been accepted");
        this.navCtrl.navigateRoot(['/partnerhome']);

      },
      err => {
        console.log(err);
      }
    );

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
