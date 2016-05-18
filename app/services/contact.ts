import {Injectable} from 'angular2/core';

@Injectable()

export class ContactService {

    sendEmail (email: string, name: string, message: string) {
        return Promise.resolve('Success');
    }
}