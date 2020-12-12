import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 public userId;
  constructor(private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
    let id = this.activatedRoute.queryParams.subscribe( (val) => 
    this.userId = val.data
    // console.log(val)
    );
      // console.log(id);
    console.log(this.userId);
  }

}

