const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./configuration/connectDb.js"); 
const hostExpressServer = require("./configuration/hostExpressServer.js");
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

//Use JSON for requests
app.use(express.json());