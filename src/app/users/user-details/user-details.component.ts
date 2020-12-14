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
    this.apiUrl = this.url + '/' + this.userId + '/posts';
    console.log(this.apiUrl)
    // this.httpService.getUsers(this.apiUrl).subscribe(
    //   (response) => {
    //     this.posts = response;
    //   }
    // )
    this.httpService.getUsers(this.apiUrl)
      .subscribe({
        next: (response) => {
          this.posts = response;
        },
        error: (error) => {
          console.error(error);
        }
      });

  }

  deletePost(item) {
    let deleteUrl = this.mainUrl + 'posts/' + item.id;
    console.log("delete Item", item);
    console.log("deleteURL ", deleteUrl);
    this.httpService.delete(deleteUrl)
      .subscribe({
        next: (data) => {
          console.log("delete data", data);
          this.status = 'Delete successful';
          
          const i = this.posts.findIndex(e => e.id == item.id);
          console.log("i", i);
          if(i != -1)
          this.posts.splice(i,1);
          console.log("----------------");

          // let index = item.id;
          // console.log("posts Length:", this.posts.length);
          // console.log("index-1 mod 10 = ", (index - 1) % 10);
          // if (this.posts.length == (index - 1) % 10) {

          //   console.log("inside if loop")
          //   console.log("index", index);
          //   // console.log("Deleted Title ",this.posts[this.posts.length-1].title);
          //   console.log("---------------------------------------")
          //   this.posts.splice(-1, 1);
          // }
          // else {
          //   console.log("Else loop");
          //   console.log("index", index);
          //   // console.log("Deleted Title ", this.posts[index % 10 - 1].title);
          //   console.log("---------------------------------------")
          //   this.posts.splice((index - 1) % 10, 1);
          // }

          console.log("----------------");
          console.log(this.posts);

        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });
  }
}
