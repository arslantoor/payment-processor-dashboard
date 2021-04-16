import { Route } from '@angular/router';

export interface RouteWithData extends Route {
    children?: RouteWithData[];
    data?: RouteData;
}

export interface RouteData {
    fullscreen?: boolean;
}
