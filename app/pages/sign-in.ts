import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {User} from '../models/user';
import {UsersService} from '../services/users';

@Component({
    providers: [UsersService],
    selector: 'sign-in',
    styleUrls: ['app/styles/sign-in.css'],
    templateUrl: '/app/templates/sign-in.html'
})

export class SignInComponent implements OnInit {

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

    signIn() {
        this.usersService.getUserByEmailOrUsername(this.model.emailOrUsername).then((user) => {
            if (!user) {
                this.model.success = {
                    message: 'Sign in error: Invalid user',
                    details: {
                        message: 'Valid users',
                        users: this.users
                    }
                };
            } else if (user.password === this.model.password) {
                this.model.success = {
                    message: 'Sign in success',
                    details: user
                };
            } else {
                this.model.success = {
                    message: 'Sign in error: Invalid password',
                    details: {
                        message: 'User',
                        users: user
                    }
                };
            }
        })
    }
}