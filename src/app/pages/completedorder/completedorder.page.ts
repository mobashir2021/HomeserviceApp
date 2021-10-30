import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Platform, NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewLeadData } from "../../services/newlead.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-completedorder',
  templateUrl: './completedorder.page.html',
  styleUrls: ['./completedorder.page.scss'],
})
export class CompletedorderPage implements OnInit {

  Customerid : number;
  //apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/LeadsWithType/';
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/OrderCustomer';
  items: any;
  result : JSON;

  constructor(private plt: Platform, private navCtrl: NavController, private storage: Storage, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.storage.get("CustomerId").then(data => {
        this.Customerid = data as number;
        let params = {'Status':"Completed"};
      this.http.get(this.apiUrl,  {params : { Status: "Completed", Customerid: this.Customerid.toString()} }).subscribe(
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

}
