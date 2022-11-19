"use strict";

class UserStorage {
  static #users = {
    id: ["w", "나개발", "김팀장"],
    psword: ["1", "2", "3"],
    name: ["우리", "나개", "김팀"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
