import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  id: number;
  editMode = false;
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.contactService.updateContact(this.id, this.contactForm.value);
    } else {
      this.contactService.addContact(this.contactForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let phoneNumber = '';
    let imagePath = '';

    if (this.editMode) {
      const contact = this.contactService.getContact(this.id);
      firstName = contact.firstName;
      lastName = contact.lastName;
      email = contact.email;
      phoneNumber = contact.phoneNumber;
      imagePath = contact.imagePath;
    }

    this.contactForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(phoneNumber, [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")]),
      'imagePath': new FormControl(imagePath, Validators.required),
    });
  }
}
