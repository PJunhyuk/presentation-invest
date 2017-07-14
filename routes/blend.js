var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/rst_blend');
var Schema = mongoose.Schema;

//메모 모델을 정의합니다.
var Blend = new Schema({
	app_title: String,
	app_function2: Boolean,
	app_function3: Boolean,
	app_color: String,
	user_phone: String,
	contents: String,
	date: Date
});

var blendModel = mongoose.model('Blend', Blend);

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

//모든 메모 목록을 반환합니다.
exports.load = function(req, res) {
	blendModel.find({}, function(err, data) {
		console.log(data);

		res.json(data);
	});
};

//메모 쓰기 요청을 처리합니다.
exports.write = function(req, res) {
	var app_title = req.body.app_title;
	var app_color = req.body.app_color;
	var user_phone = req.body.user_phone;

	var contents = req.body.contents;
	var date = Date.now();

	var blend = new blendModel();

	blend.app_title = app_title;
	blend.app_color = app_color;
	blend.user_phone = user_phone;
	blend.contents = contents;
	blend.date = date;
	blend.comments = [];

	blend.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

//메모 삭제 요청을 처리합니다.
exports.del = function(req, res) {
	var _id = req.body._id;

	blendModel.remove({_id: _id}, function(err, result) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};
