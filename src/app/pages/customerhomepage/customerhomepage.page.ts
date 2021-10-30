import { Component, OnInit } from '@angular/core';
import { StorageService, User } from "../../services/storage.service";
import { Platform, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-customerhomepage',
  templateUrl: './customerhomepage.page.html',
  styleUrls: ['./customerhomepage.page.scss'],
})
export class CustomerhomepagePage implements OnInit {

  Balance: string;
  users: User[] = [];
  newUser: User = <User>{};


  //apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetNotificationCustomer';
  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/GetCategories';
  items: any;
  result : JSON;
  rows: number;
  grid: Array<any>;
  public searchTerm: string = "";

  slideOpts = {
    initialSlide: 1,
 slidesPerView: 1.5,
 spaceBetween: -180 ,
 autoplay:true ,
 speed:1000
 /* autoplay: true,
 speed: 3000,
 zoom: {
   maxRatio: 1
 } */
  };

  constructor(public navCtrl: NavController, private storageservice: StorageService, private plt: Platform, private storage: Storage
    , private http: HttpClient , private dataService: DataService, private router: Router) { 

      
      
        

      this.plt.ready().then(() => {

        
        this.http.get(this.apiUrl).subscribe(
          res => {
            var itemstest = JSON.stringify(res);
            this.items = JSON.parse(itemstest);
            dataService.items = this.items;
            this.grid = Array(Math.ceil(this.items.length/4));
            let rowNum = 0; //counter to iterate over the rows in the grid

            for (let i = 0; i < this.items.length; i+=4) { //iterate images

              this.grid[rowNum] = Array(4); //declare two elements per row

              if (this.items[i]) { //check file URI exists
                this.grid[rowNum][0] = this.items[i] //insert image
              }

              if (this.items[i+1]) { //repeat for the second image
                this.grid[rowNum][1] = this.items[i+1]
              }
              if (this.items[i+2]) { //repeat for the second image
                this.grid[rowNum][2] = this.items[i+2]
              }
              if (this.items[i+3]) { //repeat for the second image
                this.grid[rowNum][3] = this.items[i+3]
              }

              rowNum++; //go on to the next row
            }
            console.log(this.items);

          },
          err => {
            console.log(err);
          }
        );  

      });
   
   
 }

 clickServices(innerdata){
  /* this.dataService.setData(innerdata.CategoryId, innerdata);
  this.router.navigateByUrl('/subcategories/' + innerdata.CategoryId); */
  let navigationExtras: NavigationExtras = {
    state: {
      extradata: innerdata 
    }
  };
  this.router.navigate(['/home/booknow'], navigationExtras);

 } 
 

  ngOnInit() {
    this.setFilteredItems();
            
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
    this.grid = Array(Math.ceil(this.items.length/4));
            let rowNum = 0; //counter to iterate over the rows in the grid

            for (let i = 0; i < this.items.length; i+=4) { //iterate images

              this.grid[rowNum] = Array(4); //declare two elements per row

              if (this.items[i]) { //check file URI exists
                this.grid[rowNum][0] = this.items[i] //insert image
              }

              if (this.items[i+1]) { //repeat for the second image
                this.grid[rowNum][1] = this.items[i+1]
              }
              if (this.items[i+2]) { //repeat for the second image
                this.grid[rowNum][2] = this.items[i+2]
              }
              if (this.items[i+3]) { //repeat for the second image
                this.grid[rowNum][3] = this.items[i+3]
              }

              rowNum++; //go on to the next row
            }
  }

}
