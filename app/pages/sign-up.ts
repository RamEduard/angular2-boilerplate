import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from '../models/user';
import {UsersService} from '../services/users';

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService],
    selector: 'sign-up',
    styleUrls: ['app/styles/sign-in.css'],
    templateUrl: 'app/templates/sign-up.html'
})

export class SignUpComponent implements OnInit {

    model = {
        emailOrUsername: '',
        password: '',
        error: false,
        success: false
    };

    users: User[];

    constructor (private usersService: UsersService) {}

    getUsers() {
        this.usersService.getUsers().then(users => this.users = users);
    }

    ngOnInit() {
        this.getUsers();
    }

    ngAfterViewInit () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "public/js/sign-up.jquery.js";
        document.head.appendChild(s);
    }

    signUp() {

    }
}