'use strict'

const mongoose = require('mongoose')
require('../users/model')

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
	},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Lesson', LessonSchema)