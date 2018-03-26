import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contacts/contact-list/contact/contact.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';

import { AppRoutingModule } from './app-routing.module';

import { ContactService } from './services/contact.service';
import { DataStorageService } from './services/data-storage.service';

import { DropdownDirective } from './directives/dropdown.directive';
import { StatusFilterPipe } from './pipes/status-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactListComponent,
    HeaderComponent,
    ContactComponent,
    ContactStartComponent,
    DropdownDirective,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService, DataStorageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
