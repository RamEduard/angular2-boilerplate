import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {ContactService} from '../../services/contact';

@Component({
    providers: [ContactService],
    selector: 'boostrap-contact',
    templateUrl: 'app/templates/bootstrap/pages/contact.html'
})

export class ContactComponent {
    model = {
        email: '',
        name: '',
        message: '',
        success: false,
        error: false
    };

    submitted = false;

    constructor (private contactService: ContactService) {}

    onSubmit() {
        this.submitted = true;

        var model = this.model;

        this.contactService.sendEmail(model.email, model.name, model.message).then((result) => {
            this.model.success = result;

            this.model.email = '';
            this.model.name = '';
            this.model.message = '';
            this.submitted = false;
        })
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}