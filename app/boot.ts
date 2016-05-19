// Component
import {Component} from 'angular2/core';

// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// Http
import {HTTP_PROVIDERS} from 'angular2/http';

// Angular Bootstrap
import {bootstrap} from 'angular2/platform/browser';

// Bootstrap Component
//import {BoostrapAppComponent} from './components/bootstrap/app';

// MDL Component
import {MdlAppComponent} from './components/mdl/app';

@Component({
    directives: [
        MdlAppComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [ROUTER_PROVIDERS],
    selector: 'my-app',
    template: `<mdl-app></mdl-app>`
})

// Bootstrap routes
//@RouteConfig(BoostrapAppComponent.getRouterConfig())

// MDL Routes
@RouteConfig(MdlAppComponent.getRouterConfig())

export class BootComponent {}

bootstrap(BootComponent, [HTTP_PROVIDERS]);
