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
     
  return this.http.get(this.baseUrl).toPromise().then(res=>{
    this.users = res as User[]
  })
    
  }
 }


