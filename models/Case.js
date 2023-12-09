var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseSchema = new Schema(
{
    _id: mongoose.Schema.Types.ObjectId,
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