import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedIn = false;
  userLocal: any;


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
    //--get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal") || '{}');
    if (this.userLocal && this.userLocal.loggedIn) {
      this.loggedIn = this.userLocal.loggedIn;
    } else {
      this.loggedIn = false;
    }
  }
}
