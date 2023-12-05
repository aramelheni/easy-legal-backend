var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
	firstName: {
		type: String,
		required: true,
	},
    lastName: {
		type: String,
		required: true,
	},
    email: {
		unique: true,
		type: String,
	},
    phoneNumber: {
		type: String,
	},
    password: {
		type: String,
		required: true,
	},
    userType: {
		type: String,
		enum: ['lawyer', 'client'],
		default: 'client',
		required: true,
	}
});

const User = mongoose.model("User", userSchema); 
module.exports = User;