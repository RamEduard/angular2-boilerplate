import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from '../../models/user';
import {UsersService} from '../../services/users';

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService],
    selector: 'bootstrap-sign-up',
    styleUrls: ['app/styles/sign-in.css'],
    templateUrl: 'app/templates/bootstrap/pages/sign-up.html'
})

export class SignUpComponent implements OnInit {

    user = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        agree: false
    };

    message = {
        error: false,
        success: false
    };

    submitted = false;

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

    onAgree () {
        this.user.agree = !this.user.agree;
    }

    signUp() {
        this.submitted = true;

        if (this.user.password != this.user.passwordConfirm) {
            this.message.error = {
                msg: 'Password don\'t match'
            };
        } else if (!this.user.agree){
            this.message.error = {
                msg: 'Agree Terms and Conditions.'
            };
        } else {
            // TODO: Request sign up user

            this.message.success = {
                msg: 'Sign up success',
                details: this.user
            }
        }
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }
}