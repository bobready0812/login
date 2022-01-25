"use strict";
const express = require("express");
const router = express.Router();

router.get('/', hello);

router.get('/login', (req, res) => {
    res.render("home/login");
});


module.exports = router;