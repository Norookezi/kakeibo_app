import { RouteHelper } from './../../../namedroutes';
import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-appHeader',
  templateUrl: './appHeader.component.html',
  styleUrls: ['./appHeader.component.css']
})
export class AppHeaderComponent {
  @Input() allowBack: boolean = false;
  @Input() type: "mobile"|"web" = "web";

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router) {}

  back() { this._location.back(); }
  goTo(arg0: { name: string; }) {
    const routeName = RouteHelper.getRouteByName('login')
    RouteHelper.redirect({router: this.router, route: routeName})
  }
}
