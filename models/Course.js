const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    thumbnail: String,
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    },
    content: [{
        title: String,
        type: {
            type: String,
            enum: ['video', 'text', '3d_model', 'quiz']
        },
        data: mongoose.Schema.Mixed,
        order: Number
    }],
    enrolledStudents: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        progress: {
            type: Number,
            default: 0
        },
        completedContent: [{
            contentId: mongoose.Schema.Types.ObjectId,
            completedAt: Date
        }]
    }],
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        review: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', courseSchema);