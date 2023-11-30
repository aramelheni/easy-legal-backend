const express = require("express");
const taskRouter = express.Router(); //Create a Router instance

// Import the controller functions from the user controller file.
const {
	getTasks,
    addTask
} = require("../controllers/TaskController.js");

// Route definitions
taskRouter.get("/", getTasks);
taskRouter.post("/addOne", addTask);

module.exports = taskRouter;