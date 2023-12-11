const express = require('express')
const chatRouter = express.Router();
const {
    getChats,
    getChatMessages,
    postNewChat
} = require("../controllers/ChatController.js")

chatRouter.get("/chats/:ids", getChats);
chatRouter.post("/chats/addNew", postNewChat);
chatRouter.get("/chats/:ids/messages", getChatMessages);

module.exports = chatRouter;