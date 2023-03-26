import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User[] = [];
  users!: User;
  baseUrl: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {

  }

  loginUser() {
    debugger
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((data: any) => {
        this.user = data as User[];
      });

  }
}


