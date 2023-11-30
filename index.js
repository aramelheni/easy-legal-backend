const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./configuration/connectDb.js");
const hostExpressServer = require("./configuration/hostExpressServer.js");
const taskRouter = require("./routes/TaskRouter.js");
const userRouter = require("./routes/UserRouter.js");
const chatRouter = require("./routes/ChatRouter.js");
const taskCategoriesRouter = require("./routes/TaskCategoryRouter.js");

dotenv.config();

const launch = async () => {
    try {
        //Connect to database
        await connectDb();
        //Host the server locally
        hostExpressServer(app, process.env.PORT);
    } catch (error) {
        console.log("Unable to start the server: " + error);
        process.exit(1);
    }
}

launch();
app.use(cors());
app.use(express.json());
app.use("/api", taskRouter);
app.use("/api", taskCategoriesRouter);
app.use("/api", userRouter);
app.use("/api", chatRouter);
