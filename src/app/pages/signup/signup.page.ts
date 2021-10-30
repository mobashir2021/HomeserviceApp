import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Platform, NavController } from "@ionic/angular";
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { logging } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  typedata:string = "";
  isPartner:boolean = false;
  reverseGeocodingresults:string = "";
  selectedvalues:string[] = [];
  currentlocationchecked:string = "currentlocation";
  isaddress:boolean = false;
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetCategories';
  items:any;
  constructor(private plt: Platform, private http: HttpClient, private geolocation:Geolocation, private geocoder:NativeGeocoder,
    private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.typedata = this.router.getCurrentNavigation().extras.state.extradata;
          if(this.typedata == "customer"){
            this.isPartner = false;
          }else{
            this.isPartner = true;
          }
        }
      });
    this.plt.ready().then(() => {
      


      this.http.get(this.apiUrl).subscribe(
        res => {
          var itemstest = JSON.stringify(res);
          this.items = JSON.parse(itemstest);
        },
        err => {
          console.log(err);
        }
      );  
    });

   }

  ngOnInit() {
  }

  checkValue(event){
    if(event.detail.value == "manualaddress"){
      this.isaddress = true;
    }else{
      this.isaddress = false;
    }
    
  }

  Registerclick(){
    console.log(this.selectedvalues);


    if(!this.isaddress)
    {
      
      this.geolocation.getCurrentPosition().then((position) =>{
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var options:NativeGeocoderOptions={
          useLocale:true,
          maxResults:1
        }
        this.geocoder.reverseGeocode(latitude,longitude, options).then((results) => {
          this.reverseGeocodingresults = JSON.stringify(results[0]);
        });
      });
    }
  }

  

}
