var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var goalSchema = new Schema({
	goalName:  {
		type: String,
		required: true,
	},
	updatedGoal: {
		type: String
	},
	goalProgress:  {
		type: Boolean,
		default: false
	},
	createdBy:  {
		type: String,
		required: true
	}
}, {
	timestamps: true
});



var userSchema =  new Schema({
	email:  {
		type: String,
		required: true
	},
	username:  {
		type: String,
		unique: true
	},
	password:  {
		type: String,
		required: true
	},
	goals: [goalSchema]
}, {
	timestamps: true
});


// the schema is useless so far
// we need to create a model using it
var Users = mongoose.model('User', userSchema);

// make this available to our Node applications
module.exports = Users;
