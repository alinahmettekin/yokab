var express = require('express');
var router = express.Router();

const hakkinda=function (req,res) {
    res.render('index',{'title':'Hakkında'});
}

module.exports = {
    hakkinda,
}