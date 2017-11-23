'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    biography: String,
    dateCreated: String
});

module.exports = mongoose.model('User', UserSchema);