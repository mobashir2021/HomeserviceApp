import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Platform, NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewLeadData } from "../../services/newlead.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-outgoingleads',
  templateUrl: './outgoingleads.page.html',
  styleUrls: ['./outgoingleads.page.scss'],
})
export class OutgoingleadsPage implements OnInit {

  Partid : number;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetOngoingLeads';
  items: any;
  result : JSON;

  constructor(private plt: Platform, private navCtrl: NavController, private storage: Storage, private http: HttpClient) { 
    this.plt.ready().then(() => {

      this.storage.get("Partnerid").then(data => {
        console.log(data);
        this.Partid = data as number;

        this.http.get(this.apiUrl,  {params : { Partnerid: this.Partid.toString() } }).subscribe(
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
      
      let params = {'Status':"Ongoing"};
      

      
    });
  }


  ngOnInit() {
    
  }

  navigateLead(data: number){
    let filterResult : any = this.items.filter(u => u.OrderId == data);
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        //CustomerAddress: filterResult[0].Customeraddress + ',' + filterResult[0].Area,
        Area: filterResult[0].Area,
          Service: filterResult[0].Service,
          CustomerAddress: filterResult[0].CustomerAddress,
          Remarks: filterResult[0].Remarks,
          City: filterResult[0].City,
          OrderId: filterResult[0].OrderId,
          CustomerName: filterResult[0].CustomerName,
          CustomerPhoneNumber: filterResult[0].CustomerPhoneNumber
      }
    };
    this.navCtrl.navigateRoot(['/partnerhome/ongoingleaddetails'], navigationExtras);
  }

}
