
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from  '../model/users';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }
  // constructor() { }
  // url: string = "https://jsonplaceholder.typicode.com/users";

  getUsers(url):Observable<any> {
    return this.httpClient.get<Users[]>(url);
  }
}
