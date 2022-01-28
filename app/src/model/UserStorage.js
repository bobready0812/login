"use strict"


class UserStorage {
   static #user = {
        id: ["1", "2", "3"],
        psword: ["1", "2", "3"],
        name:["1", "2", "3"],
    }; 


    static getUser(...fields) {
       const users = this.#user;
       const newUsers = fields.reduce((newUsers, field) => {
           if(users.hasOwnProperty(field)) {
               newUsers[field] = users[field];
           }
           return newUsers;
       },{});
       
       return newUsers;
    }
}


module.exports = UserStorage;