import { ActivatedRoute, Route, Router } from "@angular/router";
import { routes } from "./app/app-routing.module";

export interface NamedRoute extends Route {
    name?: string
}


export class RouteHelper {
    constructor(route: ActivatedRoute, router: Router) {}

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

    static redirect(option: {router: Router, route: NamedRoute}) {
        const {router, route} = option;
        router.navigate([route.path]);
    }
}