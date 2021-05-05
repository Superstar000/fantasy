import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    myteam_name: {
        type: String,
        required: true,
        unique: true,
    },
    favourite_team: {
        type: Object,
        required: true,
    },
    money: {
        type: Number,
        required: true,
        default: 100
    },
    score: {
        type: Number,
        required: true,
        default: 0
    },
    picks: [
        {
            element: Number,
            position: Number,
            purchase_price: Number,
            is_main_member: {
                type: Boolean,
                default: false
            }
        }
    ],
    terms_agreed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Myteam', userSchema);
