import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  userName: string;
  userId: number;
  email: string;
  phoneNumber: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userId: 1, userName: 'Hydrogen', email:'aniruddha@assjdbajs.com',phoneNumber: 1.0079, address: 'H'},
  {userId: 2, userName: 'Helium', email:'aniruddha@assjdbajs.com',phoneNumber: 4.0026, address: 'He'},
  {userId: 3, userName: 'Lithium', email:'aniruddha@assjdbajs.com',phoneNumber: 6.941, address: 'Li'},
  {userId: 4, userName: 'Beryllium', email:'aniruddha@assjdbajs.com',phoneNumber: 9.0122, address: 'Be'},
  {userId: 5, userName: 'Boron', email:'aniruddha@assjdbajs.com',phoneNumber: 10.811, address: 'B'},
  {userId: 6, userName: 'Carbon', email:'aniruddha@assjdbajs.com',phoneNumber: 12.0107, address: 'C'},
  {userId: 7, userName: 'Nitrogen', email:'aniruddha@assjdbajs.com',phoneNumber: 14.0067, address: 'N'},
  {userId: 8, userName: 'Oxygen', email:'aniruddha@assjdbajs.com',phoneNumber: 15.9994, address: 'O'},
  {userId: 9, userName: 'Fluorine', email:'aniruddha@assjdbajs.com',phoneNumber: 18.9984, address: 'F'},
  {userId: 10, userName: 'Neon', email:'aniruddha@assjdbajs.com',phoneNumber: 20.1797, address: 'Ne'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['userId', 'userName', 'email','phoneNumber', 'address'];
  
  
  ngOnInit() {
  }
}
