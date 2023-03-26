import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _login: Login[] = [];
  baseurl: string = "../../login.json"
  userData: any;
  isErr=false;
  isNotValid=false;
  errorMassage= '';
  userName: any;
  passWord: any;
  constructor(private Http: HttpClient) { }

  login() {
    this.Http.get(this.baseurl).toPromise().then(res => {

    })
  }
   
  
}

