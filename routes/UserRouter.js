const express = require("express");
const userRouter = express.Router(); //Create a Router instance
const isAuth = require("../middleware/isAuth");
const isAutho = require('../middleware/isAutho');
const { postSignin, postSignup } = require("../controllers/UserController.js");

userRouter.post("/users/signin", postSignin);
userRouter.post("/users/signup", postSignup);

module.exports = userRouter;