const Case = require("../models/Case.js")

async function getCases(request, response){
    console.log("/cases");

    await Case.find({}).then(cases =>{
        response.status(200).json({
            msg: "ok",
            result: cases
        });
    }).catch(error => {
        response.status(500).json({
            msg: "Error retrieving cases: " + error
        });
    });
}

module.exports = {getCases}