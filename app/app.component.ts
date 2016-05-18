import {Component, OnInit} from 'angular2/core';
// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// Components
import {HeaderComponent} from './components/header';

// Pages components
import {HomeComponent} from './pages/home';
import {PostsComponent} from './pages/posts';
import {ContactComponent} from './pages/contact';
import {SignInComponent} from './pages/sign-in';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ],
    providers: [
        ROUTER_PROVIDERS
    ],
    selector: 'my-app',
    templateUrl: 'app/templates/app.html'
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
    }
])

export class AppComponent {}
