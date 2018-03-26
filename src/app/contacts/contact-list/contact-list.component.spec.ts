import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { ContactService } from '../../services/contact.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Contact } from '../../models/contact.model';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class RouterStub {
  navigate(params){
  }
}

class ActivatedRouteStub {
  params: Observable<any> = Observable.empty();
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
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
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the new contact form page', () => {
    let router = TestBed.get(Router);
    let activatedRoute = TestBed.get(ActivatedRoute);
    let spy = spyOn(router, 'navigate');

    component.onNewContact();
    expect(spy).toHaveBeenCalledWith(['new'], {relativeTo: activatedRoute});
  });

  it('should load contacts from the server', () => {
    let contacts = [
      new Contact('Superman', 'Smith', 'superman@yahoo.com', '675-145-7863', 'Active', 'https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125'),
      new Contact('Ironman', 'Johnson', 'ironman@yahoo.com', '555-923-4310', 'Active', 'https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/image/ironman_final.jpg'),
      new Contact('Hulk', 'Williams', 'hulk@gmail.com', '123-321-3963', 'Active', 'https://lumiere-a.akamaihd.net/v1/images/tmb-sq_character-hulk_launch_8ce79435.jpeg?width=600'),
      new Contact('Spiderman', 'Brown', 'spider@hotmail.com', '945-294-4328', 'Active', 'https://vignette.wikia.nocookie.net/avengers-assemble/images/7/77/Ultimate_Spiderman_1.jpg/revision/latest?cb=20160522155142'),
      new Contact('Batman', 'Jones', 'batman@gmail.com', '678-344-5845', 'Active', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg'),
    ];
    fixture.detectChanges();
    expect(component.contacts).toEqual(contacts);
  });

});
