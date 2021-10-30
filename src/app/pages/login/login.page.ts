
import { Platform, ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService, User } from "../../services/storage.service";
import { map } from 'rxjs/operators';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  toastController: ToastController;
  username:string;
  password:string;
  usertype:string;
  users: User[] = [];
  newUser: User = <User>{};
  items: any;
  result : JSON;
  usertypes = [
    {name:'Customer' , id:0} ,
    {name: 'Professional' , id:1}
  ]
  current_usertype = this.usertypes[0];

  apiUrl: string = 'http://www.hmsdatamanagement.co.in/api/ServiceApi/UserLogin';
  /* apiUrl: string = '../api/LeadApi/UserLogin/'; */
  constructor(private http: HttpClient, private storageservice: StorageService, private plt: Platform, private storage: Storage,
    private toastctl : ToastController, private navCtrl: NavController) {
    
   }

  ngOnInit() {
    let fromStore: usertype =  {name: 'Professional' , id:1};
    let index: number = this.usertypes.findIndex(item => item.id === fromStore.id);
    this.current_usertype = this.usertypes[index];
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
    });
  }

  addUser(){
    this.storageservice.addItems(this.newUser).then(item => {
      this.newUser = <User>{};
      this.loadUsers();
    });
  }

  deleteUser(user: User){
    this.storageservice.deleteItem(user.Userid).then(user =>{
      this.navCtrl.navigateRoot('/');
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  
  fetchLoginData() {
    console.log(this.current_usertype);
    let params = {'username':this.username,'password':this.password};
    /* var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
 */
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',  
        'Accept':'application/json'
        })
        
      };

     /*  this.http.get(this.apiUrl,  {params : { username: this.username, password: this.password} }).pipe(map((res: Response) =>{
        this.items = res.json();
        console.log(this.items);
        //this.items = JSON.stringify(res);
        this.newUser.PartnerId = this.items.PartnerId;
        this.newUser.Userid = this.items.Userid;
        this.newUser.Username = this.items.Username;
        this.newUser.Password = this.items.Password;
        this.newUser.Service = this.items.Service;
        this.newUser.Address = this.items.Address;
        this.newUser.Balance = this.items.Balance;
        this.newUser.City = this.items.City;
        this.newUser.Pincode = this.items.Pincode;
        this.addUser();
        this.navCtrl.navigateForward('/home');
        }));
 */

     this.http.get(this.apiUrl,  {params : { username: this.username, password: this.password} }).subscribe(
      res => {
        

        var itemstest = JSON.stringify(res);
        this.items = JSON.parse(itemstest);
        console.log(this.items);
        let balancedata: number;
        if(this.items.Balance as number < 0){
          this.items.Balance = "0";
        }

        //this.newUser = new User();
        /* this.newUser.PartnerId = this.items["PartnerId"];
        this.newUser.Userid = this.items["Userid"];
        this.newUser.Username = this.items["Username"];
        this.newUser.Password = this.items.Password;
        this.newUser.Service = this.items.Service;
        this.newUser.Address = this.items.Address;
        this.newUser.Balance = this.items["Balance"];
        this.newUser.City = this.items.City;
        this.newUser.Pincode = this.items.Pincode;
        this.addUser(); */
        if(this.items.TypeLogin == "Customer"){
          
          this.storage.set("Usertype", this.items.TypeLogin);
          this.storage.set("Userid", this.items.Userid);
          this.storage.set("CustomerId", this.items.PartnerId);
          this.storage.set("Customername", this.items.Customername);
          this.storage.set("Mobileno", this.items.Mobileno);
          this.storage.set("Service", this.items.Service);
          this.storage.set("Balance", this.items.Balance);
          this.storage.set("Pincode", this.items.Pincode);
          this.storage.set("Address", this.items.Address);
          this.storage.set("Username", this.items.Username);
          this.storage.set("City", this.items.City);
          this.navCtrl.navigateForward('/home');

        }else if(this.items.TypeLogin == "Professional"){
          this.storage.set("Partnerid", this.items.PartnerId);
          this.storage.set("Userid", this.items.Userid);
          this.storage.set("Partnername", this.items.Partnername);
          this.storage.set("Service", this.items.Service);
          this.storage.set("Balance", this.items.Balance);
          this.storage.set("Pincode", this.items.Pincode);
          this.storage.set("Address", this.items.Address);
          this.storage.set("Username", this.items.Username);
          this.storage.set("City", this.items.City);
          this.storage.set("Usertype", this.items.TypeLogin);
          this.navCtrl.navigateForward('/partnerhome');
        }
        

        
      },
      err => {
        console.log(err);
      }
    ); 
  }

}
interface usertype{
  id?: number;
  name?: string;
  flag?: string;
  code?: string;
  status?: number;
  }
