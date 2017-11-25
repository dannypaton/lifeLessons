'use strict';

const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    userId: {
    	required: true,
    	type: Number,
        default: 0
    },
    lessonId: {
    	required: true,
    	type: Number,
        default: 0
    },
    message: {
    	required: true,
    	type: String,
        default: ''
    },
    dateCreated: {
		required: true,
		type: Date,
		default: new Date()
	}
});

module.exports = mongoose.model('Lesson', LessonSchema);