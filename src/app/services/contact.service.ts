import { Subject } from 'rxjs/Subject';

import { Contact } from '../models/contact.model';

export class ContactService {
  contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[] = [
    new Contact('Superman', 'Smith', 'superman@yahoo.com', '675-145-7863', 'Active', 'https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125'),
    new Contact('Ironman', 'Johnson', 'ironman@yahoo.com', '555-923-4310', 'Active', 'https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/image/ironman_final.jpg'),
    new Contact('Hulk', 'Williams', 'hulk@gmail.com', '123-321-3963', 'Active', 'https://lumiere-a.akamaihd.net/v1/images/tmb-sq_character-hulk_launch_8ce79435.jpeg?width=600'),
    new Contact('Spiderman', 'Brown', 'spider@hotmail.com', '945-294-4328', 'Active', 'https://vignette.wikia.nocookie.net/avengers-assemble/images/7/77/Ultimate_Spiderman_1.jpg/revision/latest?cb=20160522155142'),
    new Contact('Batman', 'Jones', 'batman@gmail.com', '678-344-5845', 'Active', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg'),
  ];

  constructor() {}

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
    this.contactsChanged.next(this.contacts.slice());
  }

  getContacts() {
    return this.contacts.slice();
  }

  getContact(index: number) {
    return this.contacts[index];
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }

  updateContact(index: number, newContact: Contact) {
    this.contacts[index] = newContact;
    this.contactsChanged.next(this.contacts.slice());
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    this.contactsChanged.next(this.contacts.slice());
  }
}
