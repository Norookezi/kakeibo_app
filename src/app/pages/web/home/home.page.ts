import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class WebHomePage implements OnInit {
  userAgent = window.navigator.userAgent
  device?: 'IOS'|'ANDROID';

  constructor() { }

  ngOnInit() {

    if (/iPad|iPhone|iPod/.test(this.userAgent)) {
      this.device = 'IOS';
    } else if (/android/i.test(this.userAgent)) {
      this.device = 'ANDROID';
    }
  }

}
