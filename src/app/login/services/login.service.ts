import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;
  constructor(private router: Router) { }
  userLocal: any;
  userName: any;
  passWord: any;

}

