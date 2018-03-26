import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataStorageService } from '../services/data-storage.service';
import { ContactService } from '../services/contact.service';

class RouterStub {
  navigate(params){
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: DataStorageService, useClass: DataStorageService },
        { provide: ContactService, useClass: ContactService }

      ],
      imports : [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
