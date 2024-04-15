import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NamedRoute, RouteHelper } from 'src/namedroutes';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {
  @Input() name?: string;
  @Input() path?: string;
  @Input() class?: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  redirectAction() {
    let route: NamedRoute | undefined;
    if (this.name !== undefined) route = RouteHelper.getRouteByName(this.name)

    if (this.path !== undefined) route = RouteHelper.getRouteByPath(this.path)

    if (!route) throw new Error("No route found");

    RouteHelper.redirect({router: this.router, route: route});
  }
}
