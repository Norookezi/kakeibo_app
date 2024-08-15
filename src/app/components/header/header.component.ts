import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NamedRoute, RouteHelper } from 'namedroutes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})

export class HeaderComponent implements OnInit {

  constructor() {
  }
  currentRoute: NamedRoute = RouteHelper.getRouteByPath(window.location.pathname.substring(1));

  navigation: {[key: string]: NamedRoute} = {
    home: RouteHelper.getRouteByName('home'),
    tutorial: RouteHelper.getRouteByName('tuto')
  }
  navForm: FormGroup = new FormGroup({
    navigation: new FormControl(),
  });
  ngOnInit(): void {
    const routeInNav = Object.entries(this.navigation).find(([key, value]) => value.name === this.currentRoute.name)??['']

    this.navForm.controls['navigation'].setValue(routeInNav[0])
  }

}
