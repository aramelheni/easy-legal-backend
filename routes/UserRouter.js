const express = require("express");
const userRouter = express.Router(); //Create a Router instance
const {getUser} = require("../controllers/UserController.js");

const users = [
    {
        name: "ahmed"
    },
    {
        name: "zeineb"
    },
    {
        name: "wawa"
    }
]

userRouter.get("/users", getUser);

module.exports = userRouter;