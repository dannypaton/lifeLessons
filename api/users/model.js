'use strict'

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		required: true,
		type: String
	},
	name: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String
	},
	dateCreated: {
		required: true,
		type: String
	},
	active: {
		required: true,
		type: Boolean,
		default: true
	},
	private: {
		required: true,
		type: Boolean,
		default: false
	},
	role: {
		type: String,
		enum: ['user', 'author', 'admin', 'superAdmin'],
		default: 'user'
	}
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model('User', UserSchema)