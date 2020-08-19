var express = require("express");

var burger = require("../models/burger.js");
var router = express.Router();

// `router` for the app
router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    res.render('index')
});

router.post("/burgers/create", function(req, res) {

});

router.put("/burgers/:id", function(){

});

module.exports = router;