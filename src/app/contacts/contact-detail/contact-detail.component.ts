import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  public contact: Contact = null;
  public id: number;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.contact = this.contactService.getContact(this.id);
        }
      );
  }

  onEditContact() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteContact() {
    let firstName:string = this.contact.firstName;
    if(window.confirm(`Are you sure to delete ${firstName}`)) {
      this.contactService.deleteContact(this.id);
      this.router.navigate(['/contacts']);
    }
  }
}
