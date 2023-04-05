import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLocal: any;
  userName = '';
  passWord = '';
  isErr = false;
  isNotValid = false;
  errorMassage = '';
  userData: any;

  constructor(private router: Router, public service: LoginService) {

   }

  ngOnInit() {
    this.service.user = {
      userName: '',
      passWord: '',

    };
    this.getLocal();
    if (this.userLocal && this.userLocal.loggedIn) {
      this.router.navigate(['home']);
    }
  }
  getLocal() {
    //--get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal") || '{}');
    console.log('this.userLocal->>', this.userLocal);
  }
  login() {
    this.userData=this.service.loginUser();
    debugger
    // this.userData = this.service.user[this.service.user.findIndex(user=> user.userName === this.service.users.userName && user.passWord ===this.service.users.passWord)]
    this.userData = this.service.users.find(user => (user.userName === this.service.user.userName && user.passWord === this.service.user.passWord));
    if (!this.userData) {
      this.userData = { loggedIn: false, data: {} };
      this.isErr = true;
      this.isNotValid = true;
    } else {
      this.isErr = false;
      //--set localStorage
      let _tmp = { loggedIn: true, data: this.userData };
      localStorage.setItem("userLocal", JSON.stringify(_tmp));
      window.location.reload();
    }
    return false;
  }

}

