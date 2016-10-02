var Users = require('../datasets/users');
module.exports.setGoal = function (req, res) {
	Users.findById(req.body.createdBy, function (err, userData) {
		var user = userData;
		user.goals.push(req.body);
		user.save(function (err, updatedUser) {
			if (err) throw err;
			console.log('Updated Goals!');
			res.json(updatedUser.goals);
		});
	});
};
module.exports.getGoal = function (req, res) {
	Users.findById(req.body.createdBy, function (err, userData) {
		var user = userData;
		res.json(user.goals);
	});
};
module.exports.deleteGoal = function (req, res) {
	Users.findById(req.body.createdBy, function (err, user) {
		user.goals.id(req.body._id).remove();
		user.save(function (err, resp) {
			if (err) throw err;
			res.json(resp);
		});
	});
};
module.exports.achieveGoal = function (req, res) {
	Users.findById(req.body.createdBy, function (err, user) {
		if (user.goals.id(req.body._id).goalProgress === true) {
			user.goals.id(req.body._id).goalProgress = false;
		}
		else {
			user.goals.id(req.body._id).goalProgress = true;
		}
		user.save(function (err, resp) {
			if (err) throw err;
			res.json(user.goals.id(req.body._id));
		});
	});
};
module.exports.editGoal = function (req, res) {
	Users.findById(req.body.createdBy, function (err, user) {
		user.goals.id(req.body._id).goalName = req.body.updatedGoal;
		user.save(function (err, resp) {
			if (err) throw err;
			res.json(user.goals.id(req.body._id));
		});
	});
};
