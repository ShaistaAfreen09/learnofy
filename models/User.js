const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId;
        }
    },
    googleId: String,
    role: {
        type: String,
        enum: ['student', 'tutor', 'admin'],
        default: 'student'
    },
    avatar: String,
    bio: String,
    enrolledCourses: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        },
        progress: {
            type: Number,
            default: 0
        },
        enrolledDate: {
            type: Date,
            default: Date.now
        }
    }],
    createdCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);