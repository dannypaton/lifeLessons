'use strict'

const mongoose = require('mongoose')
require('../users/model')

const LessonSchema = new mongoose.Schema({
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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Lesson', LessonSchema)