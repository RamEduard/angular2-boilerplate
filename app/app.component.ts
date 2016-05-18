import {Component, OnInit} from 'angular2/core';
// Routing pages
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// Components
import {HeaderComponent} from './components/header';

// Pages components
import {HomeComponent} from './pages/home';
import {PostsComponent} from './pages/posts';

// Models
import {Post} from './models/post';

// Services
import {PostsService} from './services/posts';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ],
    providers: [
        ROUTER_PROVIDERS
    ],
    selector: 'my-app',
    template: `
    <bootstrap-header></bootstrap-header>
    <div class="container theme-showcase" role="main">
        <router-outlet></router-outlet>
    </div>`
})

@RouteConfig([
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
    }
])

export class AppComponent {}
