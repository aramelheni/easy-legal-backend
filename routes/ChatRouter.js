const express = require('express')
const chatRouter = express.Router();
const {
    getChats,
    getChat
} = require("../controllers/ChatController.js")

chatRouter.get("/chats", getChats);
chatRouter.get("/chats/get-chat", getChat);

module.exports = chatRouter;