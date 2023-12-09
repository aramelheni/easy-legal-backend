async function hostExpressServer(server, port){
    server.listen(port, (error) => {
        if (error) {
            throw new Error(error);
        }
        else {
            console.log(`Server Started on port ${port}`)
        }
    });
}

module.exports = hostExpressServer;