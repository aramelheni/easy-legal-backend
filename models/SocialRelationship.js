var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    id1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    id2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    kind: {type: String, enum: ["friends", "block"], required: true, default: "friends"}
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;