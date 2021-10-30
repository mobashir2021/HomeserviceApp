
import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Platform, NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewLeadData } from "../../services/newlead.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.page.html',
  styleUrls: ['./newleads.page.scss'],
})
export class NewleadsPage implements OnInit {

  Partid : number;
  //apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/LeadsWithType/';
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNewLeads';
  items: any;
  result : JSON;
  leadData : NewLeadData;


  constructor(private plt: Platform, private navCtrl: NavController, private storage: Storage, private http: HttpClient) { 
      this.plt.ready().then(() => {
        this.storage.get("Partnerid").then(data => {
          this.Partid = data as number;
          let params = {'Status':"New"};
        this.http.get(this.apiUrl,  {params : { Partnerid: this.Partid.toString()} }).subscribe(
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

  

  navigateAccept(data: number){
    let filterResult : any = this.items.filter(u => u.OrderId == data);
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        
          //Address: filterResult[0].Customeraddress + ',' + filterResult[0].Pincode,
          Address:  filterResult[0].Pincode,
          Service: filterResult[0].Service,
          //CreditUsed: filterResult[0].CreditUsed,
          Orderdesc: filterResult[0].Orderdesc,
          City: filterResult[0].City,
          OrderId: filterResult[0].OrderId
      }
    };
    this.navCtrl.navigateRoot(['/partnerhome/newleadaccept'], navigationExtras);
  }

}
