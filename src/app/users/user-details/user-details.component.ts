import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPosts } from 'src/app/model/userPosts';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  public userId;
  url: string = "https://jsonplaceholder.typicode.com/users";
  posts: UserPosts[];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpServiceService) {

  }

  ngOnInit() {
    let id = this.activatedRoute.queryParams.subscribe((val) =>
      this.userId = val.data
    );
    let apiUrl = this.url + '/'+ this.userId + '/posts';
    console.log(apiUrl)
    this.httpService.getUsers(apiUrl).subscribe(
      (response) => {
        this.posts = response;
      }
    )
    console.log(this.posts);
  }

}

