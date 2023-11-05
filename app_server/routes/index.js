var express = require('express');
var router = express.Router();
var ctrlPostlar = require('../controllers/postlar');
var ctrlDigerleri = require('../controllers/digerleri');



//Homepage route
router.get('/', ctrlPostlar.anaSayfa);
//post information route
router.get('/post', ctrlPostlar.postBilgisi);
//add new comment
router.get('/post/yorum/yeni', ctrlPostlar.yorumEkle);
//about route
router.get('/hakkinda', ctrlDigerleri.hakkinda);
router.get('/yorumlar', ctrlPostlar.yorumlar);
router.get('/yorumlar/:postId', ctrlPostlar.yorumlar);



module.exports = router;
