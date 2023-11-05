const postlar = require('../controllers/postlar');

const getYorumlar = function (req, res) {
    const postId = req.params.postId;
    let selectedPost = null;
    for (let i = 0; i < postlar.length; i++) {
        if (postlar[i].postId === postId) {
            selectedPost = postlar[i];
            break;
        }
    }
    if (selectedPost) {
        res.render('yorumlar', { title: 'Yorumlar', postlar: [selectedPost], postId: postId });
    } else {
        res.status(404).send('Post bulunamadı');
    }
};

module.exports = {
    getYorumlar
};