const { postMessage } = require("../controllers/ChatController");

function configureChat(io) {
    io.on('connection', socket => {
        socket.on('disconnect', () => {
        });

        socket.on('chat message', (chatId, senderId, message) => {
            console.log(`CHAT[${chatId}]: <${senderId}> sent <${message}>`);
            const messageData = {
                content: message,
                senderId,
                date: new Date()
            }
            postMessage(chatId, messageData).then(() => {
                io.emit('chat message', chatId, messageData);
            }).catch(error => {
                console.log("Error saving the message:", error);
            });
        });
    })

}

module.exports = { configureChat }