const mongoose=require("mongoose");
const messageSchema = new new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    content: {
        type: String,
        trim: true
    },

    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true
    },

    readBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    messageType: {
        type: String,
        default: 'text'
    }

}, {
    timestamps: true
});

module.exports=mongoose.model("Message", messageSchema)