import { Component, OnInit } from '@angular/core';
import { StorageService, User } from "../../services/storage.service";
import { Platform, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  

  Balance: string;
  users: User[] = [];
  newUser: User = <User>{};
  constructor(public navCtrl: NavController, private storageservice: StorageService, private plt: Platform, private storage: Storage) { 
     this.plt.ready().then(() => {
      /* this.storage.get("Balance").then(data => {
        this.Balance = data as string;
      }); */
    }); 
    
  }

  public async getBalance(settingName){
    return await this.storage.get(settingName);
  }


  ngOnInit() {
    
  }
  clickCreateBill(){

  }
  clickViewBill(){
    
  }



  clickAccount(){
    console.log('testdata');
    

  }
  clickNewlead(){
    this.navCtrl.navigateRoot('/partnerhome/newleads');
  }
  clickOutgoinglead(){
    this.navCtrl.navigateRoot('/partnerhome/outgoingleads');
  }
  clickDeniedlead(){
    this.navCtrl.navigateRoot('/partnerhome/deniedleads');
  }
  clickCompletedlead(){
    this.navCtrl.navigateRoot('/partnerhome/completedleads');
  }
  clickComplaint(){

  }
  clickRecharge(){

  }
  clickAddnewlead(){

  }
  clickReports(){

  }
  clickProducts(){

  }
  clickServiceEngg(){

  }
  clickHelpsupport(){

  }

}
