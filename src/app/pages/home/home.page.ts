import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteHelper } from 'namedroutes';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class HomePage implements OnInit {
  userAgent = window.navigator.userAgent
  device?: 'IOS'|'ANDROID';

  constructor(private router: Router) { console.log(this.router) }

  redirectToLogin = () => { RouteHelper.redirect({name: 'login'}, this.router) }


  ngOnInit() {

    if (/iPad|iPhone|iPod/.test(this.userAgent)) {
      this.device = 'IOS';
    } else if (/android/i.test(this.userAgent)) {
      this.device = 'ANDROID';
    }
  }

}
