import User from './User.js';
class Group {
  constructor(){
    this.room = [];
  }

  add(userName, age, hobbies) {
    let u = new User(userName, age, hobbies);
    this.room.push([u.id, u]);
    return u;
  }
}