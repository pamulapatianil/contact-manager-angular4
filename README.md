# ContactManagerAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Folder Structure
src/app/contacts - contains all the components related to the contacts <br />
src/app/header - container header component <br />
src/app/services - contains services needed to save contacts <br />
src/app/models - contains contact model <br />

## Functionality

All the contacts that are loading initially are hard-coded in the ContactService.

In the header section under the manage dropdown the two links do the following.

Save Data : save the current contacts on the screen to the firebase database. <br />
Fetch Data: fetch the contacts that are saved in the firebase database.<br />

Create Contact, Edit Contact, Delete Contact won't update the values in the database.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
