import {Injectable} from 'angular2/core';

import {USERS} from '../mock-users';
import {User} from '../models/user';

@Injectable()

export class UsersService {

    getUsers () {
        return Promise.resolve(USERS);
    }

    getUser(id: number) {
        return Promise.resolve(USERS).then(
                users => users.filter(user => user.id === id)[0]
        );
    }

    getUserByEmail(email: string) {
        return Promise.resolve(USERS).then(
            users => users.filter(user => user.email === email)[0]
        );
    }

    getUserByEmailOrUsername(emailOrUsername: string) {
        return Promise.resolve(USERS).then(
                users => users.filter(user => user.email === emailOrUsername || user.username === emailOrUsername)[0]
        );
    }
}