const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended:true }));

var User = require('./model');

router.post('/b', function(req, res, next){
    User.create( {
        id: req.body.id, 
        title:req.body.title,
        subtitle:req.body.subtitle,
        backcolor:req.body.backcolor,
        titlecolor:req.body.titlecolor,
        subtitlecolor:req.body.subtitlecolor,
        bingoarray:req.body.bingoarray
        },
        function(err, user) {
            if (err) return res.status(500).send("User 생성 실패.");
            res.status(200).send(req.body);
        });
})

router.get('/a', function(req, res) {
    User.find( {}, function(err, users) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(users);
    });
});


module.exports = router;