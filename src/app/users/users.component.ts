import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
// import {Subject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from 'cluster';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: Users[];
  val : Users[];
 
  id = [];
  constructor(private httpService: HttpServiceService, private router: Router) { }

  // dataSource = ELEMENT_DATA;
  // displayedColumns: string[] = ['userId', 'userName', 'email','phoneNumber', 'address'];
  url: string = "https://jsonplaceholder.typicode.com/users/";
  
  ngOnInit(){
  this.httpService.getUsers(this.url).subscribe(
    (response: Users[]) => {
      this.users = response;
      console.log(this.users);
    });

    // this.users.map(res => res.id);

    // this.address = this.users.map(res => res.id);
    // console.log("this.address ", this.address);

    
  }
    openChild(val){

      const url1 = this.router.serializeUrl(
        this.router.createUrlTree([`/user-details`], { queryParams: { data: val.id } })
      );
      window.open(url1, '_blank');

      // console.log(val);
      // this.router.navigate(['/user-details'], { queryParams: { data: val.id } });
    }
}

