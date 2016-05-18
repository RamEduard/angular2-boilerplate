import {Component} from 'angular2/core';
// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'bootstrap-header',
  templateUrl: 'app/templates/header.html'
})
export class HeaderComponent {}
