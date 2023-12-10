var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        date: { type: Date, required: true }
    }]
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;