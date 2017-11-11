'use strict';

const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    userId: Number,
    lessonId: Number,
    message: String,
    dateCreated: String,
});

module.exports = mongoose.model('Lesson', LessonSchema);