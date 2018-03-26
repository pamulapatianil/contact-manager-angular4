import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Contact } from '../../models/contact.model';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

class RouterStub {
  navigate(params){
  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(value){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let contactService : ContactService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: ContactService, useClass: ContactService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    component.contact = contactService.getContact(0);
    //fixture.detectChanges();
  });

  it('should get a contact from the server', () => {
    let contacts = [
      new Contact('Superman', 'Smith', 'superman@yahoo.com', '675-145-7863', 'Active', 'https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125')
    ];

    let activatedRoute  = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 0 });
    fixture.detectChanges();
    expect(component.contact).toEqual(contacts[0]);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a contact if the user confirms', ()=> {
    spyOn(window, "confirm").and.returnValue(true);
    let router  = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.onDeleteContact();
    expect(spy).toHaveBeenCalledWith(['/contacts']);
  });

  it('should NOT delete a contact if the user cancels', ()=> {
    spyOn(window, "confirm").and.returnValue(false);
    let router  = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.onDeleteContact();
    expect(spy).not.toHaveBeenCalled();
  });

});
