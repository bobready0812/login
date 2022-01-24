const express = require("express");
const res = require("express/lib/response");
const app = express();

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
 res.send(
 );   
});

app.get('/login', (req, res) => {
    res.send(`

`);
});

app.listen(3000, () => {
 console.log("서버 가동");
}); 