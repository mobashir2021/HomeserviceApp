
import { Injectable } from '@angular/core';
import { Storage  } from "@ionic/storage";


export interface User{
  PartnerId:number,
  Userid:number,
  Username:string,
  Password:string,
  Address:string,
  Service:string,
  Balance:string,
  City:string,
  Pincode:string
}

const USER_KEY = 'my-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  //create
  addItems(user: User) : Promise<any>{
    return this.storage.get(USER_KEY).then((users : User[]) => {
      if(users){
        users.push(user);
        return this.storage.set(USER_KEY, users);
      }else{
        return this.storage.set(USER_KEY, [user]);
      }
    });
  }

  getItems(): Promise<User[]>{
    return this.storage.get(USER_KEY);
  }

  updateItem(user: User): Promise<any>{
    return this.storage.get(USER_KEY).then((users : User[]) => {
      if(!users || users.length === 0){
        return null;
      }

      let newUsers : User[] = [];
       /* for(let i in users){
        if( === user.Userid){
          newUsers.push(user); 
        }else{
          newUsers.push(i);
        }
      }  */

      for(let i of users){
        if(i.Userid === user.Userid){
          newUsers.push(user); 
        }else{
          newUsers.push(i);
        }
      }

      //newUsers.push(user);

      return this.storage.set(USER_KEY, newUsers);
    });
  }

  deleteItem(id: number): Promise<User>{
    return this.storage.get(USER_KEY).then((users: User[]) => {
      if(!users || users.length == 0){
        return null;
      }

      let toKeep : User[] = [];
      for(let i of users){
        if(i.Userid != id){
          toKeep.push(i);
        }
      }
      return this.storage.set(USER_KEY, toKeep);
    });
  }
}
