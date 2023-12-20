const Chat = require("../models/Chat.js")

async function postMessage(chatId, messageData) {
    const result = await Chat.findOneAndUpdate(
        { _id: chatId },
        { $push: { messages: messageData } }
    )
    return result;
}

async function postNewChat(request, response) {
    const { ids, nature } = request.body;
    if (nature === "private") {
        console.log(`Requested to create a new ${nature} chat for users`, ids);
        const existingChat = await Chat.findOne({ ids: { $all: ids }, nature: "private" }, "_id messages");
        if (existingChat != null) {
            console.log(`Chat already exists <${existingChat._id}>`);
            response.status(200).json({
                msg: "already exists",
                _id: existingChat._id,
                messages: existingChat.messages
            })
            return;
        }
    }

    chat = new Chat({
        ids,
        nature,
        messages: [],
    });
    chat.save().then(chat => {
        console.log("Created a new chat for users", ids);
        response.status(200).json({ msg: "ok", _id: chat._id, messages: [] })
    }).catch(error => {
        console.log("Failed to create a new chat:", error);
        response.status(500).json({ msg: error });
    });
}

async function getChats(request, response) {
    const { participantId } = request.params;
    console.log(`/chats/for/${participantId}`);
    // return;
    // if (!ids) {
    //     console.log("Refused to retrieve all the chats.");
    //     response.status(500).json({ msg: "Specify at least 1 chat member." })
    //     return;
    // }

    Chat.find({ ids: { $in: [participantId] } }, { messages: 0 }).populate("ids").exec().then(chats => {
        response.status(200).json({ msg: "ok", chats });
    }).catch(error => {
        console.log("Error retrieving chats for(", ids, "):", error);
        response.status(500).json({ msg: error })
    });
}

async function getChatMessages(request, response) {
    const id = request.params.id;
    console.log(`/getChatMessages for chat <${id}>`);
    await Chat.findOne({ _id: id }, "messages").then(chat => {
        console.log("chat exists!");
        response.status(200).json({
            msg: "ok",
            messages: chat.messages
        });
    }).catch(error => {
        response.status(500).json({ msg: error });
    });
}

// async function getChatMessages(request, response) {
//     const ids = request.params.ids?.split(',');
//     console.log("/getChatMessages", ids);
//     await Chat.findOne({ ids: { $all: ids } }, "messages").then(chat => {
//         console.log("chat exists!");
//         response.status(200).json({
//             msg: "ok",
//             messages: chat.messages
//         });
//     }).catch(error => {
//         response.status(500).json({ msg: error });
//     });
// }

module.exports = { getChats, getChatMessages, postNewChat, postMessage }