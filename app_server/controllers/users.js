var express = require('express');
var router = express.Router();

const users = [
    {
        userId: "1001",
        ad: "alinahmettekin",
        lastLoginTime: "29.10.2023 19.52",
        signUpDate: "29 Ekim 1923",
        userPhotoId : "alinahmettekin"
    },
    {
        userId: "1002",
        ad: "furkanceyhan",
        lastLoginTime: "02.10.2023 12.52",
        signUpDate: "10 Mayıs 1998",
        userPhotoId : "alinahmettekin"
    },
    {
        userId: "1003",
        ad: "irfancankahveci",
        lastLoginTime: "11.10.2014 12.52",
        signUpDate: "10 Mayıs 2009",
        userPhotoId : "irfancankahveci"
    }
];

const getUserProfile = (req, res) => {
    const userId = req.params.userId;
    const foundUser = users.find(user => user.userId === userId);
    if (foundUser) {
        res.render('kullaniciDetay', { user: foundUser });
    } else {
        res.status(404).send('Kullanıcı bulunamadı');
    }
};

module.exports = {
    getUserProfile
};
