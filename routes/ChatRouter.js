const express = require('express')
const chatRouter = express.Router();
const {
    getChats,
    getChatMessages,
    postNewChat
} = require("../controllers/ChatController.js")

chatRouter.get("/chats/for/:participantId", getChats);
//chatRouter.get("/chats/:ids", getChats);
chatRouter.post("/chats/add", postNewChat);
// chatRouter.get("/chats/:ids/messages", getChatMessages);
chatRouter.get("/chats/:id/messages", getChatMessages);

module.exports = chatRouter;