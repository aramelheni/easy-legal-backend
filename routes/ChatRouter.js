const express = require('express')
const chatRouter = express.Router();
const {
    getChat
} = require("../controllers/ChatController.js")

chatRouter.get("/chats/get-chat", getChat);

module.exports = chatRouter;