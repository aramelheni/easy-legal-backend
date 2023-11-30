const Task = require("../models/Task.js");

async function getTasks(req, res) {
    console.log(req.params);
    console.log("Fetching tasks from ", new Date(req.params.from), " to ", new Date(req.params.to));
    try {
        const query = {
            date: {
                $gte: new Date(req.params.from),
                $lte: new Date(req.params.to)
            }
        };

        Task.find(query).then(tasks => {
            res.status(200).json({
                msg: "ok",
                tasks
            })
            console.log("result: ", tasks);
        }).catch(error => {
            throw error;
        });
    } catch (error) {
        console.log("Error getting tasks:", error);
        res.status(500).json({
            msg: error
        });
    }
}

async function addTask(req, res) {
    console.log("/tasks/addTask: ", req.body);
    try {
        const task = req.body;
        const taskDocument = new Task(task);
        await taskDocument.save().then(savedDocument => {
            res.status(200).json({ msg: "ok", result: savedDocument });
        }).catch(error => {
            throw error;
        });
    } catch (error) {
        res.status(500).json({ msg: "error saving task: " + error });
        console.log("Error submitting task: ", error);
    }

}

module.exports = { getTasks, addTask };