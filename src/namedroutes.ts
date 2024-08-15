import { ActivatedRoute, Route, Router } from "@angular/router";
import { routes } from "./app/app-routing.module";
import { inject } from "@angular/core";

export interface NamedRoute extends Route {
    name?: string
}


export class RouteHelper {
    static getCurrentRoute(router: Router) {
      return router.url.substring(1)
    }

    static getRouteByName(name: string): NamedRoute {
        const route: NamedRoute | undefined = routes.find(r=>(r.name ?? 'None') == name);

        if (!route) throw new Error(`No route for name ${name}`);

        return route;
    }

    static getRouteByPath(path: string): NamedRoute {
        const route: NamedRoute | undefined = routes.find(r=>(r.path ?? 'None') == path);

        if (!route) throw new Error(`No route for path ${path}`);

        return route;
    }

    static redirect(option: {name?: string, path?: string, route?: NamedRoute }, router: Router) {
        let route: NamedRoute;

        if (Object.keys(option).length != 1) throw new Error("Invalid route argument")

        switch (Object.keys(option)[0]) {
            case 'name': {
                route = this.getRouteByName(option['name']!)
                break;
            }
            case 'path': {
                route = this.getRouteByPath(option['path']!);
                break;
            }
            case 'route': {
                route = option['route']!;
            }

        }
      router.navigate([route!.path]);
    }
}
