const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const moment = require('moment');
router.use(bodyParser.urlencoded({ extended:true }));

var User = require('./model');

fs.readdir('uploads', (error) => {
    // uploads 폴더 없으면 생성
    if (error) {
        fs.mkdirSync('uploads');
    }
})

router.post('/b', function(req, res, next){
    User.create( {
        id: req.body.id, 
        title:req.body.title,
        subtitle:req.body.subtitle,
        backcolor:req.body.backcolor,
        titlecolor:req.body.titlecolor,
        subtitlecolor:req.body.subtitlecolor,
        imageURL:req.body.imageURL,
        bingoarray:req.body.bingoarray,
        like:req.body.like,
        },
        function(err, user) {
            if (err) return res.status(500).send("생성 실패.");
            res.status(200).send(req.body);
        });
})
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads');  // 파일이 저장되는 경로입니다.
//     },
//     filename: function (req, file, cb) {
//         cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);  // 저장되는 파일명
//     }
// });

// const upload = multer({ storage: storage }).single("file");   // single : 하나의 파일업로드 할때

// module.exports = upload;

// router.post('/up', (req, res, next) => {
//     // FormData의 경우 req로 부터 데이터를 얻을수 없다.
//     // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다
    
//     upload(req, res, function(err) {
//       if (err instanceof multer.MulterError) {
//         return next(err);
//       } else if (err) {
//         return next(err);
//       }
//       console.log('원본파일명 : ' + req.file.originalname)
//       console.log('저장파일명 : ' + req.file.filename)
//       console.log('크기 : ' + req.file.size)
//       // console.log('경로 : ' + req.file.location) s3 업로드시 업로드 url을 가져옴
//       return res.json({success:1});
//     });
//   });

router.get('/a', function(req, res) {
    User.find( {}, function(err, users) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(users);
    });
});


module.exports = router;