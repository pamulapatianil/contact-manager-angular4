import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private contactService: ContactService) {}

  storeContacts() {
    return this.http.put('https://contact-manager-922dc.firebaseio.com/contacts.json', this.contactService.getContacts());
  }

  getContacts() {
    this.http.get('https://contact-manager-922dc.firebaseio.com/contacts.json')
      .map(
        (response: Response) => {

          const contacts: Contact[] = response.json();
            console.log("Response is:", JSON.stringify(contacts));
          return contacts;
        }
      )
      .subscribe(
        (contacts: Contact[]) => {
          this.contactService.setContacts(contacts);
        }
      );
  }
}
