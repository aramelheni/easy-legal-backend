const express = require("express");
const userRouter = express.Router(); //Create a Router instance
const {getUser,getChat} = require("../controllers/UserController.js");

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
userRouter.get("/users/chat/:id1/:id2",getChat)

module.exports = userRouter;