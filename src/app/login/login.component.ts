import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  userLocal: any;
  userName = '';
  passWord = '';
  isErr = false;
  isNotValid=false;
  errorMassage='';
  constructor(private router: Router) { }

  ngOnInit(): void {
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
    var user = this.getData();
    console.log('userName->>', this.userName);
    console.log('passWord->>', this.passWord);

    this.userData = user[user.findIndex(u => u.userName === this.userName && u.passWord === this.passWord)];
    if (!this.userData) {
      this.userData = { loggedIn: false, data: {} };
      this.isErr = true;
     this.isNotValid=true;
     this.errorMassage='Email Or PassWord Is Wrong'
    } else {
      this.isErr = false;
      //--set localStorage
      let _tmp = { loggedIn: true, data: this.userData };
      localStorage.setItem("userLocal", JSON.stringify(_tmp));
      window.location.reload();
    }
    return false;
  }

  getData() {
    return [{
      userName: "a",
      passWord: "1",
    },
    {
      userName: "abdallah",
      passWord: "1234567",
    },
    {
      userName: "omar",
      passWord: "123456",
    },
    ];
  }
  
}

