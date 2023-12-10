//.env
const dotenv = require("dotenv");
dotenv.config();

//config functions
const connectDb = require("./configuration/connectDb.js");
const hostExpressServer = require("./configuration/hostExpressServer.js");

//create express app
const express = require("express");
const app = express();

//create http server and socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    },
  });

//setup express app
app.use(require("cors")());
app.use(express.json());

//setup routers
const taskRouter = require("./routes/TaskRouter.js");
const taskCategoriesRouter = require("./routes/TaskCategoryRouter.js");
const userRouter = require("./routes/UserRouter.js");
const chatRouter = require("./routes/ChatRouter.js");
const caseRouter = require("./routes/CaseRouter.js");
app.use("/api", taskRouter);
app.use("/api", taskCategoriesRouter);
app.use("/api", userRouter);
app.use("/api", chatRouter);
app.use("/api", caseRouter);

//Setup socket io
const { configureChat } = require("./configuration/configureChat.js");
configureChat(io);

//Launch Server
const launch = async () => {
    try {
        //Connect to database
        await connectDb();
        //Host the server locally
        hostExpressServer(server, process.env.PORT);
    } catch (error) {
        console.log("Unable to start the server: " + error);
        process.exit(1);
    }
}
launch();