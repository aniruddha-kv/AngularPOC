import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { HttpServiceService } from '../services/http-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: Users[];

  constructor(private httpService: HttpServiceService) { }

  // dataSource = ELEMENT_DATA;
  // displayedColumns: string[] = ['userId', 'userName', 'email','phoneNumber', 'address'];

  
  ngOnInit(){
  this.httpService.getUsers().subscribe(
    (response: Users[]) => {
      this.users = response;
      console.log(this.users);

    }
  )}
}
