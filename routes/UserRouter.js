const express = require("express");
const userRouter = express.Router(); //Create a Router instance
const {postSignin, postSignup, getChat} = require("../controllers/UserController.js");

userRouter.post("/users/signin", postSignin);
userRouter.post("/users/signup", postSignup);
userRouter.get("/users/chat/:id1/:id2",getChat)

module.exports = userRouter;