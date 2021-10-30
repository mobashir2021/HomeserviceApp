import { LoginPage } from './pages/login/login.page';
import { CancelledorderPage } from './pages/cancelledorder/cancelledorder.page';
import { CompletedorderPage } from './pages/completedorder/completedorder.page';
import { OngoingorderPage } from './pages/ongoingorder/ongoingorder.page';
import { NeworderPage } from './pages/neworder/neworder.page';
import { AccountPage } from './pages/account/account.page';
import { HomePage } from './home/home.page';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  Tempusertype: string;
  pages: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

  constructor(private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar,private router: Router
    , private storage: Storage, public navctrl: NavController) {
    this.initializeApp();


    this.storage.get("Usertype").then(data => {
      if(data){
        this.Tempusertype = data;
        if(this.Tempusertype == "Customer"){
          
          this.pages= [
            { title: 'Home', component: HomePage, isVisible: true, iconsname: 'home'},
            { title: 'Account', component: AccountPage, isVisible: true, iconsname:'person'},
            { title: 'New Order', component: NeworderPage, isVisible: true, iconsname:'arrow-redo'},
            { title: 'Ongoing Order', component: OngoingorderPage, isVisible: true, iconsname:'sync'},
            { title: 'Completed Order', component: CompletedorderPage, isVisible: true, iconsname: 'checkmark-done'},
            { title: 'Cancelled Order', component: CancelledorderPage, isVisible: true, iconsname:'thumbs-down'}
            //{ title: 'Logout', component: Logo, isVisible: true, iconsname:'power-outline'}
          ];
        }else if(this.Tempusertype == "Professional"){
          //this.navctrl.navigateRoot('/partnerhome');
          this.pages= [
            { title: 'Home', component: HomePage, isVisible: true, iconsname: 'home'},
            { title: 'Account', component: AccountPage, isVisible: true, iconsname:'person'}
            //{ title: 'Create Bill', component: , isVisible: true, iconsname: 'document-text-outline'},
            //{ title: 'View Bill', component: CancelledorderPage, isVisible: true, iconsname:'documents-outline'}
            //{ title: 'Logout', component: Logo, isVisible: true, iconsname:'power-outline'}
          ];
        }
      }else{
        this.pages= [
          { title: 'Home', component: HomePage, isVisible: true, iconsname: 'home'},
          { title: 'Login', component: LoginPage, isVisible: true, iconsname:'person'}
          //{ title: 'Create Bill', component: , isVisible: true, iconsname: 'document-text-outline'},
          //{ title: 'View Bill', component: CancelledorderPage, isVisible: true, iconsname:'documents-outline'}
          //{ title: 'Logout', component: Logo, isVisible: true, iconsname:'power-outline'}
        ];
      }
      
    });
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pagedata){
    if(pagedata.title == "New Order"){
      this.router.navigate(['/home/neworder']);
    }else if(pagedata.title == "Ongoing Order"){
      this.router.navigate(['/home/ongoingorder']);
    }else if(pagedata.title == "Completed Order"){
      this.router.navigate(['/home/completedorder']);
    }else if(pagedata.title == "Cancelled Order"){
      this.router.navigate(['/home/cancelledorder']);
    }else if(pagedata.title == "Account"){
      this.router.navigate(['/home/account']);
    }
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  gotoHome(){
    
    this.router.navigate(['/home']);
  }
  gotoAccount(){
    this.router.navigate(['/home/account']);
  }
  gotoNewOrder(){
    
  }
  gotoOngoingOrder(){
    
  }

  gotoCompletedOrder(){
    
  }
  gotoDeniedOrder(){
    
  }
  gotoNewBill(){
    
  }
  gotoViewBill(){
    
  }
  gotoLogout(){
    
  }
}
