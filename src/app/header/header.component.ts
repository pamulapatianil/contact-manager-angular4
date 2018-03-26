import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  constructor(private dataStorageService: DataStorageService, private router: Router) { }

  onSaveData() {
    this.dataStorageService.storeContacts()
      .subscribe(
        (response: Response) => {
          console.log(response);
          alert("Contacts saved to the firebase database");
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getContacts();
    this.router.navigate(['contacts']);
  }

}
