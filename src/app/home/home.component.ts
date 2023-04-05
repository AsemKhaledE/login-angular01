import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   newDate = new Date();
   date = this.newDate.toLocaleString()
  
  userLocal: any;
  loggedIn = false;


  constructor(private router: Router) { }
  ngOnInit(): void {
    this.getLocal();
    if (this.userLocal && !this.userLocal.loggedIn) {
      this.router.navigate(['home']);
    }
  }
  logout() {
    console.log('logout');
    //--set localStorage
    let _tmp = { loggedIn: false, data: {} };
    localStorage.setItem("userLocal", JSON.stringify(_tmp));
    window.location.reload();
  }
  getLocal() {
    console.log('getLocal>>> home');
    // --get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal") || '{}');
    if (this.userLocal && this.userLocal.loggedIn) {
      this.loggedIn = this.userLocal.loggedIn;
    } else {
      this.loggedIn = false;
    }
  }

}
