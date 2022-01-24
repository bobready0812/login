"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");
//포트 
const POST = 3000;

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");



app.use("/", home); //use --> 미들 웨어 등록;

app.listen(POST, () => {
 console.log("서버 가동");
}); 