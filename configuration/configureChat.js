function configureChat(io) {
    io.on('connection', socket => {
        socket.on('disconnect', () => {
        });

        socket.on('chat message', (chatId, senderId, message) => {
            //console.log(chatId,"sent",message);
            io.emit('chat message', message);
        });
    })

}

module.exports = { configureChat }