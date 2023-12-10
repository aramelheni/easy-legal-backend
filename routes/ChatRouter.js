const express = require('express')
const chatRouter = express.Router();
const {
    getChats,
    getChatMessages
} = require("../controllers/ChatController.js")

chatRouter.get("/chats/:ids", getChats);
chatRouter.get("/chats/:ids/messages", getChatMessages);

module.exports = chatRouter;