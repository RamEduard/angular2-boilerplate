import {Component} from 'angular2/core';
// Routing pages
import { ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'mdl-footer',
    templateUrl: 'app/templates/mdl/includes/footer.html'
})
export class FooterComponent {}
