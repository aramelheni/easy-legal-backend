var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskCategorySchema = new Schema(
{
	title: {
		type: String,
		required: true,
	}
});

const TaskCategory = mongoose.model("Task-Categorie", taskCategorySchema); 
module.exports = TaskCategory;