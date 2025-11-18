const mongoose=require("mongoose");
const chatSchema = new Schema({
    chatName: {
        type: String,
        trim: true
    },

    isGroupChat: {
        type: Boolean,
        default: false
    },

    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],

    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message",
    },

    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    groupImage: {
        type: String,
        default: 'https://placehold.co/100x100/A0AEC0/000000?text=Group'
    }

}, {
    timestamps: true 
});

module.exports= mongoose.model("Chat", chatSchema)