function configureChat(io) {
    io.on('connection', socket => {
        console.log("user connected!", socket);

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        socket.on('chat message', (chatId, senderId, message) => {
            console.log(message);
            io.emit('chat message', message);
        });
    })

}

module.exports = { configureChat }