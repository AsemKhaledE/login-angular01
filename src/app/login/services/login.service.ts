import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = [];
  user!: User;
  baseUrl: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {
  }

  loginUser() {
    debugger
  this.http.get(this.baseUrl)
  .toPromise()
   .then((result:any) => {
     this.users = result as User[];
})
  }
}


