import User from './User.js';

function checkId(id) {
  return id.length === 36;
}

export default class Group {
  constructor(){
    this.room = [];
  }

  add(userName, age, hobbies) {
    let u = new User(userName, age, hobbies);
    this.room.push(u);
    return u;
  }

  getAll() {
    return this.room;
  }

  getFromId(id) {
    if (!checkId(id)) {
      return {
        message: 'Id not valid',
      }
    }

    const put = this.room.find((item) => {
      return item.id === id;
    });
    console.log(put);
    if (put) {
      return put;
    } else {
      return {
        message: 'Id not exist',
      }
    }
  }
  
  removeById(id) {
    const toRemove = this.room.find((item) => {
      return item.id === id;
    });
    return this.room.splice(this.room.indexOf(toRemove), 1);
  }

  updateById(id, userName, age, hobbies) {
    const toUpdate = this.room.find((item) => {
      return item.id === id;
    });
    toUpdate.userName = userName;
    toUpdate.age = age;
    toUpdate.hobbies = hobbies;
    return toUpdate;
  }
}