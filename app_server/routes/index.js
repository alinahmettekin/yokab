var express = require('express');
var router = express.Router();
var ctrlPostlar = require('../controllers/postlar');
var ctrlDigerleri = require('../controllers/digerleri');
var ctrlUsers = require('../controllers/users')


//Homepage route
router.get('/', ctrlPostlar.anaSayfa);
//post information route
router.get('/post', ctrlPostlar.kullaniciBilgisi);
//add new comment
router.get('/post/yorum/yeni', ctrlPostlar.yorumEkle);
//about route
router.get('/hakkinda', ctrlDigerleri.hakkinda);
router.get('/postdetay', ctrlPostlar.yorumlar);
router.get('/postdetay/:postId', ctrlPostlar.yorumlar);
router.get('/:userId', ctrlUsers.getUserProfile)




module.exports = router;
