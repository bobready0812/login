"use strict"


const fs = require("fs");

class UserStorage {
  


    static getUser(...fields) {
    //    const users = this.#user;
       const newUsers = fields.reduce((newUsers, field) => {
           if(users.hasOwnProperty(field)) {
               newUsers[field] = users[field];
           }
           return newUsers;
       },{});
       
       return newUsers;
    }

    static getUserInfo(id) {
fs.readFile("./src/databases/users.json", (err,data) => {
    if(err) throw err;
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});
    return userInfo;
});
  

  
}

   static save(userInfo) {
    //  const users = this.#user;
     users.id.push(userInfo.id);
     users.name.push(userInfo.name);
     users.psword.push(userInfo.psword);
     return { success: true};
   } 
}


module.exports = UserStorage;