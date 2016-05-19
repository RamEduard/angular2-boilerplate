import { Component, OnInit } from 'angular2/core';
// Routing pages
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Components
import {HeaderComponent} from './header';

// Pages components
import {HomeComponent} from '../../pages/bootstrap/home';
import {PostsComponent} from '../../pages/bootstrap/posts';
import {ContactComponent} from '../../pages/bootstrap/contact';
import {SignInComponent} from '../../pages/bootstrap/sign-in';
import {SignUpComponent} from '../../pages/bootstrap/sign-up';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ],
    selector: 'boostrap-app',
    templateUrl: 'app/templates/bootstrap/app.html'
})

export class BoostrapAppComponent {

    /**
     * [getRouterConfig]
     * @returns {any[]}
     */
    static getRouterConfig(): Array {
        return [
            {
                path: '/contact',
                name: 'Contact',
                component: ContactComponent
            },
            {
                path: '/home',
                name: 'Home',
                component: HomeComponent,
                useAsDefault: true
            },
            {
                path: '/posts',
                name: 'Posts',
                component: PostsComponent
            },
            {
                path: '/sign-in',
                name: 'SignIn',
                component: SignInComponent
            },
            {
                path: '/sign-up',
                name: 'SignUp',
                component: SignUpComponent
            }
        ];
    }
}
