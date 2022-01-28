"use strict";

const UserStorage = require("../../model/UserStorage");


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
       const id = req.body.id;
       const psword = req.body.psword;
        
       const userStorage = new UserStorage();
       console.log(userStorage.user);
//        const response = {};
//        if (user.id.includes(id)) {
//            const idx = user.id.indexOf(id);
//            if(user.psword[idx] === psword) {
//                response.success = true;
//                return res.json(response);
//            }
//        }
//        response.success = false;
//        response.msg = "로그인 실패";
//        return res.json(response);
//     },
// };



module.exports = {
 process,
 output,
}