import {Component} from 'angular2/core';

@Component({
    selector: 'mdl-home',
    styles: [`
    #view-source {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 40px;
      margin-bottom: 40px;
      z-index: 900;
    }
    `],
    templateUrl: 'app/templates/mdl/pages/home.html'
})

export class HomeComponent {}