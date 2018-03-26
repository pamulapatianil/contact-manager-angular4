import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';

import { Contact } from '../models/contact.model';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should add a contact', inject([ContactService], (service: ContactService) => {
    var newContact = new Contact('Dummy', 'Test', 'dummy@yahoo.com', '675-145-7863', 'Active', 'https://dummy.jpg');
    service.addContact(newContact);
    expect(service.getContacts()).toContain(jasmine.objectContaining(newContact));
  }));

  it('should update a contact', inject([ContactService], (service: ContactService) => {
    var contactToEdit = service.getContact(0);
    contactToEdit.firstName = "edited first name";
    contactToEdit.lastName = "edited last name";
    service.updateContact(0,contactToEdit);
    expect(service.getContact(0)).toEqual(jasmine.objectContaining(contactToEdit));
  }));

  it('should delete a contact', inject([ContactService], (service: ContactService) => {
    var contactToDelete = service.getContact(0);
    service.deleteContact(0);
    expect(service.getContacts()).not.toContain(jasmine.objectContaining(contactToDelete));
  }));



});
