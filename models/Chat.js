var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    ids: [{ type: Number, required: true }],
    messages: [{
        senderId: { type: Number, required: true },
        content: { type: String, required: true },
        date: { type: Date, required: true }
    }]
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;