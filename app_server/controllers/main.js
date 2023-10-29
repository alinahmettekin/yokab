var express = require('express');
var router = express.Router();

const index = function (req, res) {
    res.render('index', {'title': "Express"});
}

module.exports={
    index
}