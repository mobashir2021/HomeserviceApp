import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];

  private data = [];
  constructor() { }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.Categoryname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
}
