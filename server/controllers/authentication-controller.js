var Users = require('../datasets/users');

module.exports.signup = function (req, res){


		Users.create(req.body, function (err, user) {
		if (err) throw err;
		console.log('User created!');
		var id = user._id;
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Added the user with id: ' + id);
	});


};

module.exports.login = function (req, res){
	Users.find(req.body, function (err, results){
		if (err){
			console.log("Error Out");
		}

		if (results && results.length === 1){
			var userData= results[0];
			res.json({email: req.body.email,
					  _id: userData._id,
					  username: userData.username,
					  image: userData.image
					});
		 }
	})
}
