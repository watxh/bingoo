/* index.js */
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const controller = require('./controller');
const cors = require('cors');

// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://root:0910@bingoo-vwcbg.gcp.mongodb.net/data?authSource=admin&replicaSet=Bingoo-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
// 	console.log("mongo db connection OK.");
// });

// var testSchema = mongoose.Schema({
//     name: String,
//     color:String
// });

// var dimigoo = mongoose.model("dimigo", testSchema, "dimigo");

// var testIns = new dimigoo({ name: "testIns", color:"#FFFFFF"});

// app.use(bodyParser.json());
// app.use('/api', async(req, res)=> {
// 	const users = await dimigoo.find({});
// 	res.json(users);
// });

app.use(cors());
app.use('/users', controller);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

//module.exports = testIns;

// testIns.save(function(err, testIns){
// 	if(err) return console.error(err);
// 	testIns.speak();
// });



