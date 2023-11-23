const Task = require("../models/Task.js");

async function getTasks(req, res) {
    try {
        res.status(200).json({
            msg: "ok"
        })
        return;
        await Task.find({}).then( tasks => {
            res.status(200).json({
                msg: "ok",
                tasks
            })
        }).catch (error => {
            throw error;
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
}

async function addTask(req, res) {
    console.log("HTTP: addTask: ", req.body);
    try {
        const task = req.body;
        const taskDocument = new Task(task);
        await taskDocument.save().then(savedDocument => {
            res.status(200).json({ msg: "ok", result: savedDocument });
        }).catch(error => {
            throw error;
        });
    } catch (error) {
        res.status(500).json({ msg: "error saving task: " + err });
    }

}

module.exports = { getTasks, addTask };