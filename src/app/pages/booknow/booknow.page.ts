import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { StorageService, User } from "../../services/storage.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {

  Userid: number;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/BookOrder';
  data: any;
  constructor(private route: ActivatedRoute, private router: Router, private storage: Storage , private http: HttpClient,
    private toastController: ToastController) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.extradata;
        console.log(this.data);
      }
    });
    this.storage.get("Userid").then(data => {
      this.Userid = data as number;
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Order has been accepted successflly.',
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }

  sendBookService(datatemp){
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json' //'application/x-www-form-urlencoded'
    });
    let options = {
        headers: headers
    }
    let postData = {
      "Service": datatemp.Categoryname,
      "Userid": this.Userid
      
    }

    //let body = new HttpParams();
//body = body.set('Service', datatemp.Categoryname);
//body = body.set('Userid', String(this.Userid));
    var body = 'Service='+ datatemp.Categoryname + '&Userid=' + this.Userid;

    this.http.get(this.apiUrl, {params : { Service: datatemp.Categoryname, Userid: this.Userid.toString()} })
    .subscribe(data => {
        console.log("Data POsted");
         this.presentToast();
         this.router.navigate(['/home']);
    });
  }

}
