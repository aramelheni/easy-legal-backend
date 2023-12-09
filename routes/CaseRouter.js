const express = require('express')
const caseRouter = express.Router();

const {
    getCases
} = require("../controllers/CaseController.js")

caseRouter.get("/cases", getCases);

module.exports = caseRouter;