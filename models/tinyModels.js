import mongoose from "mongoose";

const tinySchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortcode: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const tinyModel = mongoose.model('tinyUrl', tinySchema);
export default tinyModel;