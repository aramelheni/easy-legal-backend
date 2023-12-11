const Chat = require("../models/Chat.js")

async function postNewChat(request, response) {
    const ids = request.body.ids;
    const initialMessage = request.body.initialMessage;
    chat = new Chat({
        ids,
        messages: initialMessage ? [initialMessage] : []
    });
    console.log("Will create a new chat");
    chat.save().then(chat=>{
        response.status(200).json({msg: "ok", _id: chat._id})
    }).catch(error=>{
        response.status(500).json({msg: error});
    });
}

async function getChats(request, response) {
    console.log("/getChats");
    //.map(id => parseInt(id))
    const ids = request.params.ids?.split(',');
    console.log(ids);
return;
    if (!ids) {
        console.log("Refused to retrieve all the chats.");
        response.status(500).json({ msg: "Specify at least 1 chat member." })
        return;
    }

    Chat.find({ ids: { $all: ids } }, { messages: 0 }).then(chats => {
        response.status(200).json({ msg: "ok", chats });
    }).catch(error => {
        console.log("Error retrieving chats for(", ids, "):", error);
        response.status(500).json({ msg: error })
    });
}

async function getChatMessages(request, response) {
    console.log("/getChatMessages");
    const ids = request.params.ids?.split(',');
    await Chat.findOne({ ids: { $all: ids } }, "messages").then(chat => {
        response.status(200).json({
            msg: "ok",
            messages: chat.messages
        });
    }).catch(error => {
        response.status(500).json({ msg: error });
    });

}

module.exports = { getChats, getChatMessages, postNewChat }