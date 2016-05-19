import {Component} from 'angular2/core';
// Routing pages
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'bootstrap-header',
  templateUrl: 'app/templates/bootstrap/includes/header.html'
})
export class HeaderComponent {}
