const express = require('express')
const taskCategoriesRouter = express.Router();

const {
    getCategories
} = require("../controllers/TaskCategoryController.js")

taskCategoriesRouter.get("/task-categories", getCategories);

module.exports = taskCategoriesRouter;