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
  status: string;
  errorMessage: string;
  mainUrl: string = "https://jsonplaceholder.typicode.com/"
  url: string = "https://jsonplaceholder.typicode.com/users";
  posts: UserPosts[];
  apiUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpServiceService) {

  }

  ngOnInit() {
    let id = this.activatedRoute.queryParams.subscribe((val) =>
      this.userId = val.data
    );
    this.apiUrl = this.url + '/'+ this.userId + '/posts';
    console.log(this.apiUrl)
    this.httpService.getUsers(this.apiUrl).subscribe(
      (response) => {
        this.posts = response;
      }
    )
  }

  deletePost(item){
    let deleteUrl =this.mainUrl+'posts/'+item.id;
    console.log("deleteURL ",deleteUrl);
    this.httpService.delete(deleteUrl)
    .subscribe({
        next: (data) => {
            console.log(data);
            this.status = 'Delete successful';
            console.log(this.status);
              let index = item.id;
              if(this.posts.length == (index-1)%10)
              {
                console.log("inside if loop")
                this.posts.splice(-1,1);
              }
              else{ 
                this.posts.splice((index-1)%10, 1); 
                console.log("Else loop");
              }
              console.log(this.posts);
            
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
}
}
