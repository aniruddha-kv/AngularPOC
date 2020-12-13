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
  url: string = "https://jsonplaceholder.typicode.com/users/";
  
  ngOnInit(){
  this.httpService.getUsers(this.url).subscribe(
    (response: Users[]) => {
      this.users = response;
      console.log(this.users);

    }
  )}
    openChild(val){

      // const url1 = this.router.serializeUrl(
      //   this.router.createUrlTree([`/user-details`], val.id)
      // );
      // window.open(url1, '_blank');

      console.log(val);
      this.router.navigate(['/user-details'], { queryParams: { data: val.id } });
    }
}

