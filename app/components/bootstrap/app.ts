import {Component, OnInit} from 'angular2/core';
// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

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
    providers: [
        ROUTER_PROVIDERS
    ],
    selector: 'my-app',
    templateUrl: 'app/templates/bootstrap/app.html'
})

@RouteConfig([
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
])

export class AppComponent {}
