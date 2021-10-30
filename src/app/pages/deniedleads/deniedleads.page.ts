import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Platform, NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewLeadData } from "../../services/newlead.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-deniedleads',
  templateUrl: './deniedleads.page.html',
  styleUrls: ['./deniedleads.page.scss'],
})
export class DeniedleadsPage implements OnInit {

  Partid : number;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetCancelledLeads';
  items: any;
  result : JSON;

  constructor(private plt: Platform, private navCtrl: NavController, private storage: Storage, private http: HttpClient) { 
    this.plt.ready().then(() => {

      this.storage.get("Partnerid").then(data => {
        this.Partid = data as number;
        let params = {'Status':"Cancelled"};
      this.http.get(this.apiUrl,  {params : { Status: 'Denied', Partnerid: this.Partid.toString()} }).subscribe(
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
      

      
    });
  }

  ngOnInit() {
  }

  navigateLead(data: number){
    let filterResult : any = this.items.filter(u => u.OrderId == data);
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        CustomerAddress: filterResult[0].CustomerAddress,
        Service: filterResult[0].Service,
        Area: filterResult[0].Area,
        Remarks: filterResult[0].Remarks,
        City: filterResult[0].City,
        OrderId: filterResult[0].OrderId,
        CustomerName: filterResult[0].CustomerName,
        CustomerPhoneNumber: filterResult[0].CustomerPhoneNumber,
        Status: "Cancelled"
      }
    };
    this.navCtrl.navigateRoot(['/partnerhome/leaddetails'], navigationExtras);
  }

}
