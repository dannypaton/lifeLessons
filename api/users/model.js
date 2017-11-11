'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // userId: Number,
    // lessonId: Number,
    // message: String,
    // dateCreated: String,
});

module.exports = mongoose.model('User', UserSchema);