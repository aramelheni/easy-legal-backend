var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId(); // Generates a new ObjectId by default
        },
    },
    ids: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    nature: {
        type: String,
        enum: ['private', 'group'],
        default: 'private',
        required: true,
    },
    messages: [{
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        date: { type: Date, required: true }
    }]
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;