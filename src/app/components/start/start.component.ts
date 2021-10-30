import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService, User } from "../../services/storage.service";
import { Platform, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  Partid : number;
  Tempusertype: string;
  users: User[] = [];
  newUser: User = <User>{};
  constructor(private router: Router,private storageservice: StorageService, private plt: Platform, private navCtrl: NavController,
    private storage: Storage) { 
    this.plt.ready().then(() => {
      this.storage.get("Usertype").then(data => {
        this.Tempusertype = data;
      });
    });
  }

  ngOnInit() {

  }

  navigateToLoginPage(){
    if(this.Tempusertype == "Customer"){
      this.navCtrl.navigateForward('/home');
    }else if(this.Tempusertype == "Professional"){
      this.navCtrl.navigateForward('/partnerhome');
    }else{
      this.router.navigate(['login']);
    }
  }

  public async getPartid(settingName){
    return await this.storage.get(settingName);
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
    });
  }

}
