const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const moment = require('moment');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./model');

router.post('/b', function (req, res, next) {
    User.create({
        id: req.body.id,
        title: req.body.title,
        subtitle: req.body.subtitle,
        backcolor: req.body.backcolor,
        titlecolor: req.body.titlecolor,
        subtitlecolor: req.body.subtitlecolor,
        imageURL: req.body.imageURL,
        backimageURL: req.body.backimageURL,
        bingoarray: req.body.bingoarray,
        like: req.body.like,
        time:moment().format(),
    },
        function (err, user) {
            if (err) return res.status(500).send("생성 실패.");
            res.status(200).send(req.body);
        });
})

router.get('/a', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(users);
    });
});

router.patch('/a/:id', async (req, res, next) => {
    await User.findOneAndUpdate({_id: req.params.id}, {
        like:req.body.like
    })
});

module.exports = router;