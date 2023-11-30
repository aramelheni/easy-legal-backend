const Chat = require("../models/Chat.js")

async function getChat(request, response){
    const ids = request.query.ids.split(',').map(id => parseInt(id));

    const chat = await Chat.find({ ids: { $all: ids } });
 
    response.status(200).json({
        msg: "ok",
        chat: chat[0]
    });
}

module.exports = {getChat}