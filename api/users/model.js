'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: {
		required: true,
		type: Number,
		default: 0
	},
	username: {
		required: true,
		type: String,
		default: ''
	},
	password: {
		required: true,
		type: String,
		default: ''
	},
	dateCreated: {
		required: true,
		type: Date,
		default: new Date()
	},
	active: {
		required: true,
		type: Boolean,
		default: true

	}
});

module.exports = mongoose.model('User', UserSchema);