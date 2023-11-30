const TaskCategory = require("../models/TaskCategory.js");

async function getCategories(req, res) {
    console.log("/task-categories");
    try {
        TaskCategory.find({}).then(categories => {
            res.status(200).json({
                msg: "ok",
                categories
            })
        }).catch(error => {
            throw error;
        });

    } catch (error) {
        console.log("Error getting task categories:", error);
        res.status(500).json({
            msg: error
        });
    }
}

module.exports = { getCategories };