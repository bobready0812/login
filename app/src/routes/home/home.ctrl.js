"use strict";

const User = require("../../model/User");

const output = {
home : (req, res) => {
    res.render("home/index");
},

login : (req, res) => {
    res.render("home/login");
},

};



const process = {
    login:(req, res) => {
      const user = new User(req.body);
      const response = user.login();
      console.log(response);
    },
};



module.exports = {
 process,
 output,
}