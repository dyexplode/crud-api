import { v4 as getID } from 'uuid';

export default class User {
  constructor(userName, age, hobbies) {
    if (!(userName && age && hobbies && typeof userName === 'string' && typeof age === 'number' && Array.isArray(hobbies))) throw new Error('One or more required propertyes of User are EMPTY');
    this.id = getID();
    this.userName = userName;
    this.age = age;
    this.hobbies = [...hobbies];
  }
}