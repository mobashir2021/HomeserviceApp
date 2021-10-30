import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Platform, NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewLeadData } from "../../services/newlead.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {
  Customerid : number;
  //apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/LeadsWithType/';
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/OrderCustomer';
  items: any;
  result : JSON;
  

  constructor(private plt: Platform, private navCtrl: NavController, private storage: Storage, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.storage.get("CustomerId").then(data => {
        this.Customerid = data as number;
        let params = {'Status':"New"};
      this.http.get(this.apiUrl,  {params : { Status: "New", Customerid: this.Customerid.toString()} }).subscribe(
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

  viewDetails(data){
    
  }


}
