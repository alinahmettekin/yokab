var express = require('express');
var router = express.Router();

const postlar = [
    {
        "postId":"1",
        "ad":"alinahmettekin",
        "post":"Hayat kısa, ömür bitiyor",
        "tarih":"29 Ekim 1923",
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
        "ad":"furkanceyhan",
        "post":"bu kibir seni yer bitirir",
        "tarih":"29 Ekim 1932",
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
]

const anaSayfa = function (req, res) {
    res.render('anasayfa',{'title':'Anasayfa', postlar
    
    })
}
const postBilgisi = function (req, res) {
    res.render('index',{'title':'Post Bilgisi',
    
    })
}

const yorumEkle = function (req, res) {
    res.render('index',{'title':'Hakkında'})
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
        res.render('yorumlar', { title: 'Yorumlar', postlar: postlar, postId: postId });
    } else {
        res.status(404).send('Post bulunamadı');
    }
};

module.exports={
    anaSayfa,
    postBilgisi,
    yorumEkle,
    yorumlar,
    postlar
};