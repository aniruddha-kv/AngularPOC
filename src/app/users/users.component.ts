import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: Users[];
  val : Users[];

  constructor(private httpService: HttpServiceService, private router: Router) { }

  // dataSource = ELEMENT_DATA;
  // displayedColumns: string[] = ['userId', 'userName', 'email','phoneNumber', 'address'];
  url: string = "https://jsonplaceholder.typicode.com/users";
  
  ngOnInit(){
  this.httpService.getUsers(this.url).subscribe(
    (response: Users[]) => {
      this.users = response;
      console.log(this.users);

    }
  )}
    openChild(val){
      console.log(val.id);
      this.router.navigateByUrl('/user-details');
    }
}

