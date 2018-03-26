import {  Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() index: number;
  constructor() { }
  fullName: string;

  ngOnInit() {
    this.fullName = `${this.contact.firstName} ${this.contact.lastName}`;
  }
}
