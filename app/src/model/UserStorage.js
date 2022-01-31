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

    static getUserInfo(id) {
   const users = this.#user;
   const idx = users.id.indexOf(id);
   const userInfo = Object.keys(users).reduce((newUser, info) => {
       newUser[info] = users[info][idx];
       return newUser;
   }, {});


   return userInfo;
    }

   static save(userInfo) {
     const users = this.#user;
     users.id.push(userInfo.id);
     users.name.push(userInfo.name);
     users.psword.push(userInfo.psword);
   } 
}


module.exports = UserStorage;