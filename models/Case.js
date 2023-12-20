var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseSchema = new Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		default: function () {
			return new mongoose.Types.ObjectId(); // Generates a new ObjectId by default
		},
	},
	title: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['open', 'closed'],
		default: 'open',
		required: true,
	},
});

const Case = mongoose.model("Case", caseSchema);
module.exports = Case;