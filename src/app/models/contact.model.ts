/*

Minimum Contact model fields:
-	First Name
-	Last Name
-	Email
-	Phone Number
-	Status (Possible values: Active/Inactive)

*/
export class Contact {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public status: string;
  public imagePath : string;

  constructor(firstName: string, lastName: string, email: string, phoneNumber: string, status: string, imagePath: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.imagePath = imagePath;
    }
}
