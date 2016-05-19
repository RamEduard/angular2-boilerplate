import {Component, OnInit} from 'angular2/core';
// Routing pages
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Components
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

// Pages components
import {HomeComponent} from '../../pages/mdl/home';
import {PostsComponent} from '../../pages/mdl/posts';
import {ContactComponent} from '../../pages/mdl/contact';
import {SignInComponent} from '../../pages/mdl/sign-in';
import {SignUpComponent} from '../../pages/mdl/sign-up';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        FooterComponent
    ],
    selector: 'mdl-app',
    templateUrl: 'app/templates/mdl/app.html'
})

export class MdlAppComponent {

    /**
     * [getRouterConfig]
     * @returns {any[]}
     */
    static getRouterConfig():Array {
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
