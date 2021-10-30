import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-signupoptions',
  templateUrl: './signupoptions.page.html',
  styleUrls: ['./signupoptions.page.scss'],
})
export class SignupoptionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RegistrationCustomer(){
    let navigationExtras: NavigationExtras = {
      state: {
        extradata: "customer" 
      }
    };
    this.router.navigate(['/signup'], navigationExtras);

  }

  RegistrationPartner(){
    let navigationExtras: NavigationExtras = {
      state: {
        extradata: "partner" 
      }
    };
    this.router.navigate(['/signup'], navigationExtras);
  }

}
