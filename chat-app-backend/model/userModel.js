const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false 
    },
    img: {
        type: String, 
        default: '[https://placehold.co/100x100/CCCCCC/000000?text=P](https://placehold.co/100x100/CCCCCC/000000?text=P)'
    },
    bio: {
        type: String,
        maxlength: 150
    },
    status: {
        type: String, 
        default: 'offline'
    },
    lastSeen: {
        type: Date
    },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true 
});


module.exports = mongoose.model("User", userSchema);