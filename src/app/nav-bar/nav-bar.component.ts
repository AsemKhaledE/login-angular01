import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn = false;
  userLocal: any;
  lang!: string;

  constructor(private router: Router, private translateService: TranslateService) {

  }


  ngOnInit() {
    this.getLocal();
    if (this.userLocal && !this.userLocal.loggedIn) {
      this.router.navigate(['home']);
    }
  }
  language(lang: any) {
    this.translateService.use(lang.target.value)
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
