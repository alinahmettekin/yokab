var express = require('express');
var router = express.Router();

const postlar = [
    {
        "postId":"1",
        "userId":"1001",
        "ad":"alinahmettekin",
        "post":"Hayat kısa, ömür bitiyor",
        "tarih":"29 Ekim 1923",
        "userPhotoId": "alinahmettekin",
        "yorumlar": [
            {
                "yorumYapan":"Ömer Faruk",
                "yorum":"çok güzel bir söz",
                "yorumTarihi":"24 Mayıs 2023"
            }
            ,
            {
                "yorumYapan":"Umut Ünlü",
                "yorum":"katılıyorum",
                "yorumTarihi":"12 Nisan 2023"

            }
        ]
    }
    ,
    {
        "postId":"2",
        "userId":"1002",
        "ad":"furkanceyhan",
        "post":"bu kibir seni yer bitirir",
        "tarih":"29 Ekim 1932",
        "userPhotoId": "furkanceyhan",
        "yorumlar": [
            {
                "yorumYapan":"Nevzat Irkıçatal",
                "yorum":"ne anlattığını anlamadım",
                "yorumTarihi":"11 Haziran 2012"
            }
            ,
            {
                "yorumYapan":"Şahin Ataş",
                "yorum":"bence kötü bir anlatım",
                "yorumTarihi":"12 Nisan 2023"

            }
        ]
    }
    ,
    {
        "postId":"3",
        "userId":"1003",
        "ad":"irfancankahveci",
        "post":"fenerbahçe şampiyon olacak",
        "tarih":"12 Mart 2013",
        "userPhotoId": "irfancankahveci",
        "yorumlar": [
            
        ]
    }
    ,
    {
        "postId":"4",
        "userId":"1004",
        "ad":"teoman",
        "post":"müzik ruhun gıdasıdır",
        "tarih":"30 Haziran 2023",
        "userPhotoId": "teoman",
        "yorumlar": [
            {
                "yorumYapan":"Aleyna Tilki",
                "yorum":"Gerçekten öyle",
                "yorumTarihi":"11 Haziran 2024"
            }
            ,
            {
                "yorumYapan":"Yıldız Tilbe",
                "yorum":"harika bir şarkıcısın",
                "yorumTarihi":"12 Ağustos 2023"

            }
        ]
    }
]

const anaSayfa = function (req, res) {
    res.render('anasayfa',{'title':'Anasayfa', postlar
    
    })
}
const kullaniciBilgisi = function (req, res) {
    res.render('index',{'title':'Kullanıcı',
    
    })
}

const yorumEkle = function (req, res) {
    res.render('index',{'title':'Yorum Ekle'})
}

const yorumlar = function (req, res) {
    const postId = req.params.postId;
    let selectedPost = null;
    for (let i = 0; i < postlar.length; i++) {
        if (postlar[i].postId === postId) {
            selectedPost = postlar[i];
            break;
        }
    }
    if (selectedPost) {
        res.render('postDetay', { title: 'Yorumlar', postlar: postlar, postId: postId });
    } else {
        res.status(404).send('Post bulunamadı');
    }
};

module.exports={
    anaSayfa,
    kullaniciBilgisi,
    yorumEkle,
    yorumlar,
    postlar
};