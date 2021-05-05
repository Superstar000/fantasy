import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import vars from '../config/var.config.js';

const userSchema = new mongoose.Schema({
    private_web_address: {
        type: String,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        index: true,
        trim: true
    },
    ip_address: {
      type: String,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email_verify: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['free', 'cashier', 'manager', 'admin'],
        default: 'free',
    },
    gender: {
        type: Number,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    post_code: {
        type: String,
        required: true
    },
    favourite_club: {
        type: Object,
        required: true
    },
    other_club: {
        type: Object
    },
    club_email_communication: [
        {
            club: String,
            email_communication: Number
        }
    ],
    premier_email_communication: {
        type: Number,
        required: true
    },
    partner_email_communication: {
        type: Number,
        required: true
    },
    store_name: String
});


userSchema.pre('save', async function save(next) {
    try {
        const rounds = vars.env === 'development' ? 1 : 10;
        this.password = await bcrypt.hash(this.password, rounds);
        return next();
    } catch(error) {
        return next(error);
    }
});

export default mongoose.model('User', userSchema);
