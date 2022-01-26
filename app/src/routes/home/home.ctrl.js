"use strict";

const { use } = require(".");



const output = {
home : (req, res) => {
    res.render("home/index");
},

login : (req, res) => {
    res.render("home/login");
},

};


const user = {
    id: ["1", "2", "3"],
    psword: ["1", "2", "3"]
}; 

const process = {
    login:(req, res) => {
       const id = req.body.id;
       const psword = req.body.psword;
       if (user.id.includes(id)) {
           const idx = user.id.indexOf(id);
           if(user.psword[idx] === psword) {
               return res.json(
                   {
                       success: true,
                   }
               );
           }
       }

       return res.json({
           success:false,
           msg:"로그인 실패",
       });
    },
};



module.exports = {
 process,
 output,
}