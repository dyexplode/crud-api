import User from './User.js';

function checkId(id) {
  return id.length === 36;
}

export default class Group {
  constructor(){
    this.room = [];
  }

  add(userName, age, hobbies) {
    try {
      let u = new User(userName, age, hobbies);
      this.room.push(u);
      return [201, u];
    } catch {
      return [400, {
        message: 'Request body does not contain required fields',
      }];
    }
  }

  getAll() {
    return [200, this.room];
  }

  getFromId(id) {
    if (!checkId(id)) {
      return [400, {
        message: 'Id not valid',
      }]
    }

    const put = this.room.find((item) => {
      return item.id === id;
    });
    if (put) {
      return [200, put];
    } else {
      return [404, {
        message: 'Id not exist',
      }];
    }
  }
  
  removeById(id) {
    if (!checkId(id)) {
      return [400, {
        message: 'Id not valid',
      }]
    }
    const toRemove = this.room.find((item) => {
      return item.id === id;
    });
    if (toRemove) {
      return [204, this.room.splice(this.room.indexOf(toRemove), 1)];
    } else {
      return [404, {
        message: 'Id not exist',
      }];
    }
  }

  updateById(id, userName, age, hobbies) {
    if (!checkId(id)) {
      return [400, {
        message: 'Id not valid',
      }]
    }
    if (!(userName && age && hobbies)) {
      return [400, {
        message: 'Required fields one or more are empty',
      }]
    }
    const toUpdate = this.room.find((item) => {
      return item.id === id;
    });
    if (toUpdate) {
    toUpdate.userName = userName;
    toUpdate.age = age;
    toUpdate.hobbies = hobbies;
    return [200, toUpdate];
    } else {
      return [404, {
        message: 'Id not exist',
      }];
    }
  }
}