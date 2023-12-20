var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			default: function () {
				return new mongoose.Types.ObjectId(); // Generates a new ObjectId by default
			},
		},
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
		role: {
			type: String,
			enum: ['lawyer', 'client'],
			default: 'client',
			required: true,
		}
	});

const User = mongoose.model("User", userSchema);
module.exports = User;