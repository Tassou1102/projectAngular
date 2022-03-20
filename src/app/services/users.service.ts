import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  students:string[]=["naoufel","siwar","mohamed","amine","ilhem"]
  constructor() { }
  getStudent()
{
  return this.students;
}

}
