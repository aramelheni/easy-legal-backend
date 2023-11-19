const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//Launch server
const port = process.env.PORT;
app.listen(port, (error) => {
    if (error) {
        console.log("Server Failed")
    }
    else {
        console.log(`Server Started on port ${port}`)
    }
});

//Use JSON for requests
app.use(express.json());