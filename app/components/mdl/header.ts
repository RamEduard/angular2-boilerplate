import {Component} from 'angular2/core';
// Routing pages
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'mdl-header',
  templateUrl: 'app/templates/mdl/includes/header.html'
})
export class HeaderComponent {}
