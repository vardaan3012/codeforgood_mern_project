const mongoose = require('mongoose');
const { Schema } = mongoose;

const TrainerSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    mobileNumber: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    documents: [
        {
            type: String
        }
    ],
});

const Trainer = mongoose.model('trainer', TrainerSchema);
module.exports = Trainer;
