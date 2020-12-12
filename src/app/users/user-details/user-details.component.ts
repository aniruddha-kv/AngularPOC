import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 userId;
  constructor(private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = id;
    console.log(this.userId)
  }

}
