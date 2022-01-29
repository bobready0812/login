"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
     this.body = body;
    }

    login() {
     const {id, psword} = UserStorage.getUserInfo("id", "psword"); 
     if (id === this.body.id && this.)
    }
}




module.exports = User;