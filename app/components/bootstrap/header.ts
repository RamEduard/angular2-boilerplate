import {Component} from '../../../node_modules/angular2/core.d';
// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '../../../node_modules/angular2/router.d';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'bootstrap-header',
  templateUrl: 'app/templates/bootstrap/includes/header.html'
})
export class HeaderComponent {}
