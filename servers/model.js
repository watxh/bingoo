var mongoose = require('mongoose');  
mongoose.connect('mongodb+srv://root:0910@bingoo-vwcbg.gcp.mongodb.net/data?authSource=admin&replicaSet=Bingoo-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});

var testSchema = mongoose.Schema({
    id:String,
    title:String,
    subtitle:String,
    backcolor:String,
    titlecolor:String,
    subtitlecolor:String,
    imageURL:String,
    bingoarray:Array,
    like:Number,
    time:String,
});

mongoose.model("dimigo", testSchema, "dimigo");

module.exports = mongoose.model("dimigo");