import { Injectable } from '@angular/core';

export interface NewLeadData {
  Leadgenerationid: number;
  CustomerId: number;
  Customername: string;
  Customermobileno: string;
  Customeraddress: string;
  Orderdesc: string;
  Serviceprovided: number;
  Orderdatetime: Date;
  AppointedDate: string;
  Cityid: number;
  Pincode: number;
  LeadStatus: string;
  City: string;
  ServiceName: string;
  CreditUsed: number;
}

@Injectable({
  providedIn: 'root'
})
export class NewleadService {

  constructor() { }
}
